
define(["thirdparty/jquery",
    "services/TemplateService",
    "notemaker/page/Page",
    "notemaker/searchresults/SearchResults",
    "notemaker/notecontent/NoteContent"
    ],

    function(jQuery, tpl, Page, SearchResults, NoteContent) {

        var NoteMaker = function( )
        {
            this.m_oPage = new Page();
            this.m_oNoteContent = new NoteContent();
            this.m_oSearchResults = new SearchResults();
        }
        
        NoteMaker.prototype.onResourcesLoaded = function()
        {
        	this.render();
        }
        
        NoteMaker.prototype.onShowBlind = function( mData )
        {
        	this.m_oPage.getPageManager().getBlind().showBlind( mData );
        }
        
        NoteMaker.prototype.onHideBlind = function()
        {
        	this.m_oPage.getPageManager().getBlind().hideBlind();
        }
        
        NoteMaker.prototype.onLoadTopic = function( sTopicId )
        {
        	this.m_oPage.getPageManager().loadPage( sTopicId );
        }
        
        NoteMaker.prototype.render = function()
        {
        	this.m_oPage.render(this.m_eElement);
            this.m_oSearchResults.render(this.m_eElement);
        }
        
        NoteMaker.prototype.onLoadNoteContent = function( mData )
        {
        	this.m_oNoteContent.onLoadNoteContent( mData );
        }
        
        return NoteMaker;
});