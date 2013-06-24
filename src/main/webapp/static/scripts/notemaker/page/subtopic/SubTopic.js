define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var SubTopic = function ( mSubTopicData )
    {
        this.m_sID = mSubTopicData["id"];
        this.m_sName = mSubTopicData["name"];
        
        this.m_nParentTopicId = mSubTopicData["parentTopicId"];

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
        return this.m_sName;
    }

    SubTopic.prototype.getElement = function () {
        return this.m_eElement;
    }
    
    SubTopic.prototype.render = function () 
    {
    	this.m_eElement.find('.sub_topic_inner').text( this.m_sName );
    }

    return SubTopic;

});