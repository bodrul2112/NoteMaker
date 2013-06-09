define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Topic = function( sID, sName )
    {
        this.m_sID = sID;
        this.m_sName = sName;

        this.m_eElement;
    }

    Topic.prototype.initialise = function() {
        this.m_eElement = tpl.getTemplate('.topic');
    }

    Topic.prototype.getID = function() {
        return this.m_sID;
    }

    Topic.prototype.getName = function() {
        return this.m_sName;
    }

    Topic.prototype.getElement = function() {
        return this.m_eElement;
    }

    Topic.prototype.remove = function() {

    }

    return Topic;

});