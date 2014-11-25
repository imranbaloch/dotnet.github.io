require(["jquery"], function ($) {
    $(document).ready(function () {
    	var projectsUrl = "projects_top.json";

    	$.getJSON(projectsUrl, function(data)
    	{
			require(["moment","ko"], function (moment,ko) {
				var p = data.Projects;
	    		var viewModel = {
				    projects: data.Summary.Projects,
				    contributors : data.Summary.Contributors,
				    forks : data.Summary.Forks,
				    projectList : ko.observableArray(p),
				    query: ko.observable(''),
					search: function(value) {
					    viewModel.projectList([]);

					    for(var x in p) {
					      if(p[x].Name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
					        viewModel.projectList.push(p[x]);
					      }
					    }
					}
				};

				ko.bindingHandlers.datetime = {
				    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
				    	var value = valueAccessor();
				    	var valueUnwrapped = ko.unwrap(value);
				    	element.innerHTML = moment(valueUnwrapped).format('MMM. DD, YYYY')
				    }
				};

				viewModel.query.subscribe(viewModel.search);
				ko.applyBindings(viewModel);
			});
    	});
    });
});

