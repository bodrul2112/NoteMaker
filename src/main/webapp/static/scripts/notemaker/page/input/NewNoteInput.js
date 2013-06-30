define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var NewNoteInput = function( oBlind )
    {
        this.m_oBlind = oBlind;
        this.m_nParentTopicId;
        
        this.m_eElement;
        this.initialise();
    }

    NewNoteInput.prototype.initialise = function() {
    	this.m_eElement = tpl.getTemplate('.input_new_note');
    }
    
    NewNoteInput.prototype.getElement = function() {
        return this.m_eElement;
    }

    NewNoteInput.prototype.setParentTopicId = function( nParentTopicId ) {
    	
    	this.m_nParentTopicId = nParentTopicId;
    }
    
    NewNoteInput.prototype.remove = function() {
        this.m_eElement.remove();
    }
    
    NewNoteInput.prototype.render = function() 
    {
    	//this.m_eElement.find('.name').text( this.m_sName );
    	this.m_oBlind.getElement().append(this.m_eElement);
    	this.m_eElement.find('.add').click(function(){
        	
    		var sNewNote = this.m_eElement.find('.name').val();
        	this.addNewNoteToDB( sNewNote );
        }.bind(this));
    	
    	this.m_eElement.find('.cancel').click(function(){
    		window.PageEventHandler.triggerEvent( "onHideBlind", {});
    		window.ResourceHandler.loadTopic( this.m_nParentTopicId ); 
        }.bind(this));
    }
    
    NewNoteInput.prototype.addNewNoteToDB = function(sNoteName) {
    	//TODO: gotta clean up this code later
		
		var postData = {
				"name":sNoteName,
				"parentTopicId": this.m_nParentTopicId
		}

		$.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/nm/newnote",
            data: JSON.stringify(postData),
            dataType: "text"
        }).done(function() {
        	alert("succces");
        	window.PageEventHandler.triggerEvent( "onHideBlind", {});
        	window.ResourceHandler.loadTopic( this.m_nParentTopicId ); 
        	
        }.bind(this))
        .fail(function(xhr, textStatus, thrownError) { alert("error " + textStatus); console.log(xhr, textStatus, thrownError);})
		
    }

    return NewNoteInput;

});