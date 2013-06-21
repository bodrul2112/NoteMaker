define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var PageElements = function( )
    {
    	this.m_eElement;
        this.m_eTopicElement;
        this.m_eSubTopicElement;
        this.m_eNotesElement;
        this.m_eQuickTextElement;
    	
    	this.initialise();
    }
    
    PageElements.prototype.initialise = function() 
    {
    	this.m_eElement = $('.page');
    	this.m_eTopicElement = $('.topics');
    	this.m_eSubTopicElement = $('.sub_topics .list');
    	this.m_eNotesElement = $('.notes .list');
    	this.m_eQuickTextElement = $('.quick_text_area');

        this.m_eSubTopics = $('.sub_topics');
        this.m_eNotes = $('.notes');

        this.setSizesOfPageParts();
    }

    PageElements.prototype.setSizesOfPageParts = function()
    {
        var nHeight = $('.page').height();
        var nWidth = $('body').width();

        var nTopicHeight = this.m_eTopicElement.height();

        this.m_eSubTopics.height((nHeight/2)-nTopicHeight);
        this.m_eSubTopics.css('top', (nTopicHeight+2)+'px');

        this.m_eNotes.height((nHeight/2));

        this.m_eNotes.css('top', (nTopicHeight+this.m_eSubTopics.height()+2)+'px');
    }

    PageElements.prototype.getPageContainer = function() 
    {
    	return this.m_eElement;
    }
    
    PageElements.prototype.getTopicContainer = function() 
    {
    	return this.m_eTopicElement;
    }
    
    PageElements.prototype.getSubTopicContainer = function() 
    {
    	return this.m_eSubTopicElement;
    }
    
    PageElements.prototype.getNoteContainer = function() 
    {
    	return this.m_eNotesElement;
    }
    
    PageElements.prototype.getQuickTextContainer = function() 
    {
    	return this.m_eQuickTextElement;
    }

    return PageElements;
});