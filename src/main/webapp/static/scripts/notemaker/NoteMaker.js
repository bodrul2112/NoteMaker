
define(["thirdparty/jquery",
    "services/TemplateService",
    "notemaker/page/Page",
    "notemaker/searchresults/SearchResults"],

    function(jQuery, tpl, Page, SearchResults) {

        var NoteMaker = function( )
        {
            this.m_oPage = new Page();
            this.m_oSearchResults = new SearchResults();
        }

        NoteMaker.prototype.render = function()
        {
            this.m_oPage.render(this.m_eElement);
            this.m_oSearchResults.render(this.m_eElement);
        }

        return NoteMaker;
});