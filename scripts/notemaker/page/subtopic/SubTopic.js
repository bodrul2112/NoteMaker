define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var SubTopic = function ( sID, sSubTopicName )
    {
        this.m_sID = sID;
        this.m_sSubTopicName = sSubTopicName;

        this.m_eElement;
        this.initialise();
    }

    SubTopic.prototype.initialise = function() {
        this.m_eElement = tpl.getTemplate('.sub_topic');
    }

    SubTopic.prototype.getID = function() {
        return this.m_sID;
    }
    SubTopic.prototype.getName = function() {
        return this.m_sSubTopicName;
    }

    SubTopic.prototype.getElement = function () {
        return this.m_eElement;
    }
    
    SubTopic.prototype.render = function () {
    	//TODO:
    }

    return SubTopic;

});