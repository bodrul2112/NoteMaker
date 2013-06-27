

require( ["plugins/domReady","thirdparty/jquery","notemaker/NoteMaker","resource/ResourceHandler"], 
		function(domReady, jQuery, NoteMaker, ResourceHandler){
	
	domReady(function(){
		
		require(["thirdparty/jquery", "notemaker/NoteMaker","resource/ResourceHandler"], function(jQuery, NoteMaker, ResourceHandler) {
			
			var oResourceHandler = new ResourceHandler();
			
			window.ResourceHandler = oResourceHandler; // its cool dude
			
			oResourceHandler.addExpectedResource("topic");
			oResourceHandler.addExpectedResource("subtopics");
			oResourceHandler.addExpectedResource("notes");
			
			var oNoteMaker = new NoteMaker();
			
			oResourceHandler.addListener(oNoteMaker);
			
		});
		
	});

});

