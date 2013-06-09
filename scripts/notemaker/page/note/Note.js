define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Note = function ( sParent ) {
        this.m_sText = "";
        this.m_sParent = sParent;
    }

    Note.prototype.getElement = function () {
        return this.m_eElement;
    }

    Note.prototype.load = function() {

    }

    Note.prototype.save = function() {

    }

    Note.prototype.clear = function() {

    }

    Note.prototype.setParentAndSave = function() {

    }

    return Note;
});