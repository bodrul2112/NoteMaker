define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var NewTopicInput = function( oBlind )
    {
    	this.m_oBlind = oBlind;
    	this.m_nParentTopicId;

        this.m_eElement;
        this.initialise();
    }

    NewTopicInput.prototype.initialise = function() 
    {
        this.m_eElement = tpl.getTemplate('.input_new_sub_topic');
    }
    
    NewTopicInput.prototype.getElement = function() {
        return this.m_eElement;
    }

    NewTopicInput.prototype.remove = function() {
        this.m_eElement.remove();
    }
    
    NewTopicInput.prototype.setParentTopicId = function( nParentId ) {
    	this.m_nParentTopicId = nParentId;
    }
    
    NewTopicInput.prototype.render = function() 
    {
    	this.m_oBlind.getElement().append(this.m_eElement);
    	this.m_eElement.find('.add').click(function(){
        	
    		var sNewTopicName = this.m_eElement.find('.name').val();
        	this.addNewSubTopicToDB( sNewTopicName );
        }.bind(this));
    	
    	this.m_eElement.find('.cancel').click(function(){
    		window.PageEventHandler.triggerEvent( "onHideBlind", {});
    		window.ResourceHandler.loadTopic( this.m_nParentTopicId ); 
        }.bind(this));
    	
    }
    
    NewTopicInput.prototype.addNewSubTopicToDB = function(sTopicName) {
    	//TODO: gotta clean up this code later
		
		var postData = {
				"name":sTopicName,
				"parentTopicId": this.m_nParentTopicId
		}

		$.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/nm/newsubtopic",
            data: JSON.stringify(postData),
            dataType: "text"
        }).done(function() {
        	alert("succces");
        	window.PageEventHandler.triggerEvent( "onHideBlind", {});
        	window.ResourceHandler.loadTopic( this.m_nParentTopicId ); 
        	
        }.bind(this))
        .fail(function(xhr, textStatus, thrownError) { alert("error " + textStatus); console.log(xhr, textStatus, thrownError);})
		
    }

    return NewTopicInput;

});