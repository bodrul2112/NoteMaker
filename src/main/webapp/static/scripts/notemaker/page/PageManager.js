define(["thirdparty/jquery", 
        "services/TemplateService",
        "notemaker/page/topic/Topic",
        "notemaker/page/subtopic/SubTopic",
        "notemaker/page/note/Note",
        "notemaker/page/quicktext/QuickText"
        ], 
		function (jQuery, tpl, Topic, SubTopic, Note, QuickText) {

    var PageManager = function ()
    {
        this.m_oTopic;
        this.m_pSubTopics = [];
        this.m_pNotes = [];
        
        this.m_oQuickText = new QuickText();
    }
    
    /** LOADERS **/

    PageManager.prototype.loadPage = function( sTopicId ) 
    {
    	this.resetStores();
    	this.loadTopic( sTopicId );
    	this.loadSubTopics( sTopicId );
    	this.loadNotes( sTopicId );
    }
    
    PageManager.prototype.resetStores = function() 
    {
    	this.m_oTopic;
        this.m_pSubTopics = [];
        this.m_pNotes = [];
        
        this.addAdders();
    }
    
    PageManager.prototype.addAdders = function() 
    {
    	var oSubTopic = new SubTopic({
    		"name":"+"
    	});
    	oSubTopic.setAsAdder(true);
    	this.m_pSubTopics.push(oSubTopic);
    	
    	var oNote = new Note({
    		"name":"+"
    	});
    	oNote.setAsAdder(true);
    	this.m_pNotes.push(oNote);
    }

    PageManager.prototype.loadTopic = function( sTopicId ) 
    {
    	$.getJSON("http://localhost:8080/nm/topic/?topicId=" + sTopicId, function(data) {
		     
        	this.m_oTopic = new Topic( data );
		    window.ResourceHandler.resourceReady("topic");
		     
		 }.bind(this));
    }

    PageManager.prototype.loadSubTopics = function( sTopicId )
    {
    	$.getJSON("http://localhost:8080/nm/subtopics/?parentId=" + sTopicId, function(data) {
		     
    		 for(var i in data)
	         {
		    	var mSubTopicData = data[i];
	            this.m_pSubTopics.push(new SubTopic(mSubTopicData));
	         }
	         window.ResourceHandler.resourceReady("subtopics");
		     
		 }.bind(this));
    }

    PageManager.prototype.loadNotes = function( sTopicId )
    {
    	$.getJSON("http://localhost:8080/nm/notes/?parentId=" + sTopicId, function(data) {
		     
   		 	for(var i in data)
	        {
		    	var mNotesData = data[i];
	            this.m_pNotes.push(new Note(mNotesData));
	        }
	        window.ResourceHandler.resourceReady("notes");
		     
		 }.bind(this));
    	
    }
    
    /** ADDERS **/
    
    PageManager.prototype.addSubTopic = function() 
    {
    }

    PageManager.prototype.addNote = function() 
    {
    	
    }
    
    /** GETTERS **/
    
    PageManager.prototype.getTopic = function()
    {
    	return this.m_oTopic;
    }
    
    PageManager.prototype.getSubTopics = function()
    {
    	return this.m_pSubTopics;
    }
    
    PageManager.prototype.getNotes = function()
    {
    	return this.m_pNotes;
    }

    return PageManager;
});