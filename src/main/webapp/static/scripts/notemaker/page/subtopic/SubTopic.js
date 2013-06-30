define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var SubTopic = function ( mSubTopicData )
    {
        this.m_sID = mSubTopicData["id"];
        this.m_sName = mSubTopicData["name"];
        this.m_nParentTopicId = mSubTopicData["parentTopicId"];
        
        this.m_bIsAdder = false;

        this.m_eElement;
        this.initialise();
    }
    
    SubTopic.prototype.setAsAdder = function( bIsAdder ) {
    	this.m_bIsAdder = true;
    }
    
    SubTopic.prototype.isAdder = function() 
    {
    	return this.m_bIsAdder;
    }

    SubTopic.prototype.initialise = function() {
        this.m_eElement = tpl.getTemplate('.sub_topic');
        
        this.m_eElement.click(function(){
        	if(this.isAdder()){

        		//TODO: gotta clean up this code later
        		
        		var postData = {
        				"name":"World",
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
                	window.ResourceHandler.loadTopic( this.m_nParentTopicId ); 
                	
                }.bind(this))
                .fail(function(xhr, textStatus, thrownError) { alert("error " + textStatus); console.log(xhr, textStatus, thrownError);})
        		
        	}else{
        		window.ResourceHandler.loadTopic( this.m_sID );
        	}
        }.bind(this));
    }

    SubTopic.prototype.getID = function() {
        return this.m_sID;
    }
    SubTopic.prototype.getName = function() {
        return this.m_sName;
    }

    SubTopic.prototype.getElement = function () {
        return this.m_eElement;
    }
    
    SubTopic.prototype.render = function () 
    {
    	this.m_eElement.find('.sub_topic_inner').text( this.m_sName );
    }

    return SubTopic;

});