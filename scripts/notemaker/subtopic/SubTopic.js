define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var SubTopic = function ()
    {

    }

    SubTopic.prototype.getElement = function () {
        return this.m_eElement;
    }

    return SubTopic;

});