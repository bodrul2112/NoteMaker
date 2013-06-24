define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var PageRenderer = function ()
    {
    	this.m_oLastDrawnPage;
    }
    
    PageRenderer.prototype.clearPage = function() 
    {
    	if(this.m_oLastDrawnPage)
    	{
    		var oPageElements = oPage.getPageElements();
        	oPageElements.getTopicContainer().empty();
        	oPageElements.getSubTopicContainer().empty();
        	oPageElements.getNoteContainer().empty();
    	}
    }
    
    PageRenderer.prototype.renderPage = function( oPage ) 
    {
    	this.clearPage();
    	
    	this._addElementsToPage( oPage );
    	this._renderElementsToPage( oPage );
    		
    	this.m_oLastDrawnPage = oPage;
    }
    
    PageRenderer.prototype._addElementsToPage = function( oPage ) 
    {
    	var oPageElements = oPage.getPageElements();
    	var eTopicContainer = oPageElements.getTopicContainer();
    	var eSubTopicContainer = oPageElements.getSubTopicContainer();
    	var eNoteContainer = oPageElements.getNoteContainer();
    	
    	var oPageManager = oPage.getPageManager();
    	var oTopic = oPageManager.getTopic();
    	
    	eTopicContainer.append(oTopic.getElement());
    	
    	var pSubTopics = oPageManager.getSubTopics();
    	for(var i=0; i<pSubTopics.length; i++)
    	{
    		var oSubTopic = pSubTopics[i];
    		eSubTopicContainer.append(oSubTopic.getElement());
    	}
    	
    	var pNotes = oPageManager.getNotes();
    	for(var i=0; i<pNotes.length; i++)
    	{
    		var oNote = pNotes[i];
    		eNoteContainer.append(oNote.getElement());
    	}
    		
    	this.m_oLastDrawnPage = oPage;
    }
    
    PageRenderer.prototype._renderElementsToPage = function( oPage ) 
    {
    	var oPageManager = oPage.getPageManager();
    	oPageManager.getTopic().render();
    	
    	var pSubTopics = oPageManager.getSubTopics();
    	
    	for(var oSubTopicKey in pSubTopics)
    	{
    		pSubTopics[oSubTopicKey].render();
    	}
    	
    	var pNotes = oPageManager.getNotes();
    	for(var i=0; i<pNotes.length; i++)
    	{
    		var oNote = pNotes[i];
    		oNote.render();
    	}
    }

    return PageRenderer;
});