
define(["thirdparty/jquery","services/TemplateService", "page/Page"], function(jQuery, tpl, Page) {

    var NoteMaker = function( ) {

        this.setUp();
        this.m_oPage = new Page();
    }

    NoteMaker.prototype.setUp = function() {
        this.m_eElement = $('.');
    }

    NoteMaker.prototype.initialiseToMainPage = function() {
        this.m_oPage.loadMainTopic();
        this.m_oPage.loadSubTopics();
        this.m_oPage.loadNotes();
    }

    NoteMaker.prototype.getElement = function() {
        return this.m_eElement;
    }

    NoteMaker.prototype.render = function() {
        this.m_oPage.render(this.m_eElement);
    }

    return NoteMaker;

});