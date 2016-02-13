(function (ko, $) {
    
    var PackageSearchResult = function(data) {
        this.packageDetails = {};
        this.fullTypeName = "";
        this.signature = "";
        this.tfms = [];
        this.fullTypeNameHighlighted = "";
        this.signatureHighlighted = "";
    };

    var PortableSearchResult = function(data) {
        //TODO: add stuff here for porting service
    };

    var portingSearchViewModel = {
        search: function(query) {
            //TODO: add searching here from both services
        },
        handleEnter: function() {
        },
        psBaseUrl: "http://packagesearch.azurewebsites.net/Search/",
        pkgsBaseUrl: "",
        loadingIndicator: ko.observable(true),
        psResults: ko.observableArray(),
        pkgsResults: ko.observableArray()
    };


	ko.applyBindings(portingSearchViewModel);
})(ko, $);
