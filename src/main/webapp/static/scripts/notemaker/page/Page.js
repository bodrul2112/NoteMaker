define(["thirdparty/jquery",
        "services/TemplateService",
        "notemaker/page/PageManager",
        "notemaker/page/PageElements",
        "notemaker/page/PageRenderer"

        ], function (jQuery, tpl, PageManager, PageElements, PageRenderer) {

    var Page = function () 
    {
        this.m_oPageManager = new PageManager();
        this.m_oPageElements = new PageElements();
        this.m_oPageRenderer = new PageRenderer();
        
        this.initialise();
    }
    
    Page.prototype.initialise = function( eNoteMakerContainer ) 
    {
    	this.m_oPageManager.loadMainTopic( this );
    	this.m_oPageManager.loadSubTopics( this );
    	this.m_oPageManager.loadNotes( this );
    }
    
    Page.prototype.loadMainPage = function( eNoteMakerContainer ) 
    {
    	//TODO: dont think i use this
    	this.m_oPageRenderer.renderPage( this );
    }
    
    Page.prototype.render = function( eNoteMakerContainer ) 
    {
    	this.m_oPageRenderer.renderPage( this );
    }
    
    Page.prototype._renderWithAnimation = function() 
    {

    }
    
    /** GETTERS **/
    
    Page.prototype.getPageManager = function() 
    {
    	return this.m_oPageManager;
    }
    
    Page.prototype.getPageElements = function() 
    {
    	return this.m_oPageElements;
    }
    
    return Page;

});