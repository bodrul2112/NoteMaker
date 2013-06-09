define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Topic = function () {

        this.m_pSubtopics = [];

    }

    Topic.prototype.getElement = function () {
        return this.m_eElement;
    }

    return Topic;

});