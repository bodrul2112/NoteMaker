

require( ["plugins/domReady","thirdparty/jquery","notemaker/NoteMaker","resource/ResourceHandler","resource/PageEventHandler"], 
		function(domReady, jQuery, NoteMaker, ResourceHandler){
	
	domReady(function(){
		
		require(["thirdparty/jquery", "notemaker/NoteMaker","resource/ResourceHandler","resource/PageEventHandler"], 
				function(jQuery, NoteMaker, ResourceHandler, PageEventHandler) {
			
			var oResourceHandler = new ResourceHandler();
			var oPageEventHandler = new PageEventHandler();
			
			window.ResourceHandler = oResourceHandler; // its cool dude
			window.PageEventHandler = oPageEventHandler; 
			
			oResourceHandler.addExpectedResource("topic");
			oResourceHandler.addExpectedResource("subtopics");
			oResourceHandler.addExpectedResource("notes");
			
			var oNoteMaker = new NoteMaker();
			
			oResourceHandler.addListener(oNoteMaker);
			oPageEventHandler.addListener(oNoteMaker);
			
		});
		
	});

});

