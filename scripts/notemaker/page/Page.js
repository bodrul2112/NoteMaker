define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var Page = function () {

        this.m_sTopic;
        this.m_pSubTopics = [];
        this.m_pNotes = [];
    }

    Page.prototype.getElement = function () {
        return this.m_eElement;
    }

    Page.prototype.loadMainTopic = function() {

        //TODO: loading mock data, load from db later
        this.m_sTopic = "Main";
    }

    Page.prototype.loadTopic = function() {

    }

    Page.prototype.addTopic = function() {

    }

    Page.prototype.loadSubTopics = function() {
        //TODO: loading mock data, load from db later
        this.m_pSubTopics.push()
    }

    Page.prototype.addSubTopic = function() {

    }

    Page.prototype.loadNotes = function() {

    }

    Page.prototype.addNote = function() {

    }

    Page.prototype.render = function( eNoteMakerContainer ) {

    }

    Page.prototype._renderWithAnimation = function() {

    }

    return Page;

});