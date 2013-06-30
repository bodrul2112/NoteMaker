
define(["thirdparty/jquery", "services/TemplateService"], function (jQuery, tpl) {

    var NoteContent = function()
    {
    	this.m_eElement;
    	this.m_eSaveButton;
    	this.m_eText;
    	
    	this.m_mLastData;
    	
    	this.initialise();
    }
    
    NoteContent.prototype.initialise = function()
    {
    	this.m_eElement = $('.sliding_page_three');
    	this.m_eSaveButton = this.m_eElement.find('.save');
    	this.m_eText = this.m_eElement.find('.input');
    	this.m_eText.text("");
    	
    	this.m_eSaveButton.click(function(){
    		this.onSaveNoteContent();
    	}.bind(this));
    }
    
    NoteContent.prototype.onLoadNoteContent = function( mData )
    {
    	this.m_mLastData = mData;
    	this.m_eText.val('');
    	this.m_eText.val(mData["content"]);
    }
    
    NoteContent.prototype.onSaveNoteContent = function() {
    	debugger;
    	var sContent = this.m_eText.val();
    	var postData = {
				"id":this.m_mLastData["id"],
				"content": sContent
		}
    	
    	$.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/nm/updatenote",
            data: JSON.stringify(postData),
            dataType: "text"
        }).done(function() {
        	alert("succces");
        }.bind(this))
        .fail(function(xhr, textStatus, thrownError) { alert("error " + textStatus); console.log(xhr, textStatus, thrownError);})
		
    }

    return NoteContent;
});