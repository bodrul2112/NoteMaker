define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Note = function () {

    }

    Note.prototype.getElement = function () {
        return this.m_eElement;
    }

    return Note;

});