define(["thirdparty/jquery", 
        "services/TemplateService",
        "notemaker/page/input/NewTopicInput",
        "notemaker/page/input/NewNoteInput"
        
        ], function (jQuery, tpl, NewTopicInput, NewNoteInput) {

    var Blind = function()
    {
    	this.m_eElement;
    	this.initialise();
    	
        this.m_oNewTopicInput = new NewTopicInput( this );
        this.m_oNewNoteInput = new NewNoteInput( this );
        
        this.hideBlind();
    }

    Blind.prototype.initialise = function() {
        this.m_eElement = $('.page .input_blind');
    }
    
    Blind.prototype.getElement = function() {
        return this.m_eElement;
    }

    Blind.prototype.remove = function() {
        this.m_eElement.remove();
    }
    
    Blind.prototype.render = function() 
    {
    	this.m_eElement.find('.name').text( this.m_sName );
    }
    
    Blind.prototype.hideBlind = function() {
        this.m_eElement.hide();
    }
    
    Blind.prototype.showBlind = function( mData ) {
    	
    	this.m_eElement.show();
    	this.m_oNewTopicInput.remove();
    	this.m_oNewNoteInput.remove();
    	if( mData["inputType"] == "newsubtopic" )
    	{
    		this.m_oNewTopicInput.setParentTopicId( mData["parentTopicId"] );
    		this.m_oNewTopicInput.render();
    	}
    }

    return Blind;

});