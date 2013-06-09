

require( ["plugins/domReady","thirdparty/jquery","notemaker/NoteMaker"], 
		function(domReady, jQuery, NoteMaker){
	
	domReady(function(){
		
		require(["thirdparty/jquery", "notemaker/NoteMaker"], function(jQuery, NoteMaker) {

			var oNoteMaker = new NoteMaker();
			oNoteMaker.render();
			
			console.log("test");
			
		});
		
	});

});

