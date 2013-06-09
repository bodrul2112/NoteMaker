define(["thirdparty/jquery",
        "services/TemplateService",
        "notemaker/page/topic/Topic",
        "notemaker/page/subtopic/SubTopic",
        "notemaker/page/note/Note"

        ], function (jQuery, tpl, Topic, SubTopic, Note) {

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

    Page.prototype.loadSubTopics = function()
    {
        //TODO: loading mock data, load from db later
        for(var i=0; i<10; i++)
        {
            this.m_pSubTopics.push(new SubTopic("id"+i, "SubTopic " + i));
        }
    }

    Page.prototype.addSubTopic = function() {

    }

    Page.prototype.loadNotes = function()
    {
        for(var i=0; i<10; i++)
        {
            this.m_pSubTopics.push(new Note("id"+i, "SubTopic " + i));
        }
    }

    Page.prototype.addNote = function() {

    }

    Page.prototype.render = function( eNoteMakerContainer ) {

    }

    Page.prototype._renderWithAnimation = function() {

    }

    return Page;

});