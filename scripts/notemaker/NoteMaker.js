
define(["thirdparty/jquery","services/TemplateService", "notemaker/page/Page"], function(jQuery, tpl, Page) {

    var NoteMaker = function( ) 
    {
        this.m_oPage = new Page();
    }

    NoteMaker.prototype.initialiseToMainPage = function() 
    {
        this.m_oPage.loadMainPage();
    }

    NoteMaker.prototype.render = function() 
    {
        this.m_oPage.render(this.m_eElement);
    }

    return NoteMaker;
});