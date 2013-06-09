define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Note = function ( sID, oParentTopic, sText )
    {
        this.m_sID = sID;
        this.m_oParentTopic = oParentTopic;
        this.m_sText = sText;

        this.m_eElement;

        this.initialise();
    }

    Note.prototype.initialise = function() {
        this.m_eElement = tpl.getTemplate('.note');
    }

    Note.prototype.getElement = function () {
        return this.m_eElement;
    }

    Note.prototype.getID = function() {
        return this.m_sID;
    }

    Note.prototype.getParentTopic = function() {
        return this.m_oParentTopic;
    }

    Note.prototype.getText = function() {
        return this.m_sText;
    }

    Note.prototype.load = function() {
        //TODO: probably not needed here
    }

    Note.prototype.save = function() {

    }

    Note.prototype.clear = function() {

    }

    Note.prototype.remove = function() {
        this.m_eElement.remove();
    }

    Note.prototype.setParentAndSave = function() {

    }
    
    Note.prototype.render = function() {

    }


    return Note;
});