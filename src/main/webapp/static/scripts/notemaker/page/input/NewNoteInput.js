define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var NewNoteInput = function( oBlind )
    {
        this.m_oBlind = oBlind;

        this.m_eElement;
        this.initialise();
    }

    NewNoteInput.prototype.initialise = function() {
        this.m_eElement = this.m_oBlind.getElement().find('.new_note_input');
    }
    
    NewNoteInput.prototype.getElement = function() {
        return this.m_eElement;
    }

    NewNoteInput.prototype.remove = function() {
        this.m_eElement.remove();
    }
    
    NewNoteInput.prototype.render = function() 
    {
    	//this.m_eElement.find('.name').text( this.m_sName );
    }

    return NewNoteInput;

});