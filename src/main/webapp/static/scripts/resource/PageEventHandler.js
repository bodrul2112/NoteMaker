
define(["thirdparty/jquery"],

    function(jQuery) {
	
	
        var PageEventHandler = function()
        {
        	this.m_pListeners = [];
        }
        
        PageEventHandler.prototype.addListener = function( oListener )
        {
        	this.m_pListeners.push(oListener);
        }
        
        PageEventHandler.prototype.triggerEvent = function( sEventName, data )
        {
        	for(var i=0; i<this.m_pListeners.length; i++)
        	{
        		var oListener = this.m_pListeners[i];
        		
        		if( typeof oListener[sEventName] == 'function')
        		{
        			oListener[sEventName]( data );
        		}
        	}
        }

        return PageEventHandler;
});