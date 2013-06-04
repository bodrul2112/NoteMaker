

require( ["plugins/domReady","thirdparty/jquery"], function(domReady, jQuery){
	
	domReady(function(){
		
		require(["thirdparty/jquery"], function(jQuery) {

			console.log("test");
		});
		
	});

});

