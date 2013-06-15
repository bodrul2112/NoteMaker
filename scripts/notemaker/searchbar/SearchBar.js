define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var SearchBar = function () {

    }

    SearchBar.prototype.getElement = function () {
        return this.m_eElement;
    }

    return SearchBar;

});