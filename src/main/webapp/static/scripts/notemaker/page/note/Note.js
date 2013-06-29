define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Note = function ( mData )
    {   	
    	this.m_sID = mData["id"];
        this.m_sName = mData["name"];
        this.m_sText = "text";
        this.m_sTimeCreated = mData["timeCreated"];
        this.m_sTimeLastUpdated = mData["timeLastUpdated"];
        this.m_nParentTopicId = mData["parentTopicId"];
        this.m_sHashTags = mData["hashTags"];
        this.m_sSpecialHashTags = mData["specialHashTags"];
        this.m_sContent = mData["content"];
        
        this.m_bIsAdder = false;

        this.m_eElement;
        this.initialise();
    }
    
    Note.prototype.setAsAdder = function( bIsAdder ) 
    {
    	this.m_bIsAdder = bIsAdder;
    }
    
    Note.prototype.isAdder = function() 
    {
    	return this.m_bIsAdder;
    }

    Note.prototype.initialise = function() {
        this.m_eElement = tpl.getTemplate('.note');
        
        this.m_eElement.click(function(){
        	if(this.isAdder()){
        		alert("add new subtopic");
        	}else{
        		//TODO: load the topic content
        	}
        }.bind(this));
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
    
    Note.prototype.render = function() 
    {
    	this.m_eElement.find('.note_inner').text(this.m_sName);
    }


    return Note;
});