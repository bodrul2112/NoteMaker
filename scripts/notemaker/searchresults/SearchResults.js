define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var SearchResults = function () {

    }

    SearchResults.prototype.getElement = function () {
        return this.m_eElement;
    }

    return SearchResults;

});