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

    PageManager.prototype.loadMainTopic = function() 
    {
        //TODO: loading mock data, load from db later
        this.m_oTopic = new Topic('mainID','Main');
    }

    PageManager.prototype.loadTopic = function() 
    {
    }

    PageManager.prototype.loadSubTopics = function()
    {
        //TODO: loading mock data, load from db later
    	
    	$.getJSON("http://localhost:8080/notes/topics/?topicId=1",
		   function(data) {
    		
		     alert(data.length);
		     for(var i=0; i<data.length; i++)
	         {
		    	var mSubTopicData = data[i];
	            this.m_pSubTopics.push(new SubTopic(mSubTopicData));
	         }
		     
		   }.bind(this));
    }

    PageManager.prototype.loadNotes = function()
    {
        for(var i=0; i<25; i++)
        {
            this.m_pNotes.push(new Note("id"+i, "Note " + i));
        }
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