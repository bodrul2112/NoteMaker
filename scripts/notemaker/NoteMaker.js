
define(["thirdparty/jquery","services/TemplateService", "page/Page"], function(jQuery, tpl, Page) {

    var NoteMaker = function( ) {
        this.m_oPage = new Page();
    }

    NoteMaker.prototype.initialiseToMainPage = function() {
        this.m_oPage.loadMainTopic();
        this.m_oPage.loadSubTopics();
        this.m_oPage.loadNotes();
    }

    NoteMaker.prototype.render = function() {
        this.m_oPage.render(this.m_eElement);
    }

    return NoteMaker;

});