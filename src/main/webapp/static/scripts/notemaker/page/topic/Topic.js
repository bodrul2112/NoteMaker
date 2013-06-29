define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Topic = function( mData )
    {
        this.m_nID = mData["id"];
        this.m_sName = mData["name"];
        this.m_nParentId = mData["parentTopicId"];

        this.m_eElement;
        this.m_ePreviousTopic;
        
        this.initialise();
    }

    Topic.prototype.initialise = function() {
        this.m_eElement = tpl.getTemplate('.topic');
        
        this.m_ePreviousTopic = this.m_eElement.find('.previous_topic');
        
        this.m_ePreviousTopic.click(function(){
        	window.ResourceHandler.loadTopic( this.m_nParentId );
        }.bind(this));
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
        this.m_eElement.remove();
    }
    
    Topic.prototype.render = function() 
    {
    	this.m_eElement.find('.name').text( this.m_sName );
    }

    return Topic;

});