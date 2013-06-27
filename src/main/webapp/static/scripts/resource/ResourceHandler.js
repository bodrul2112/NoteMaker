
define(["thirdparty/jquery"],

    function(jQuery) {
	
	
        var ResourceHandler = function()
        {
        	this.m_mExpectedResources = {};
        	this.m_pListeners = [];
        }
        
        ResourceHandler.prototype.addExpectedResource = function( sResourceName )
        {
        	this.m_mExpectedResources[sResourceName] = "expected";
        }
        
        ResourceHandler.prototype.addListener = function( oListener )
        {
        	this.m_pListeners.push(oListener);
        }
        
        ResourceHandler.prototype.resourceReady = function( sResourceName )
        {
        	if(this.m_mExpectedResources[sResourceName])
        	{
        		this.m_mExpectedResources[sResourceName]="loaded";
        	}
        	
        	if( this._isAllResourcesReady()  )
        	{
	        	for(var i=0; i<this.m_pListeners.length; i++)
	    		{
	        		var oListener = this.m_pListeners[i];
	        		
	        		if(oListener.onResourcesLoaded)
	        		{
	        			oListener.onResourcesLoaded();
	        		}
	    		}
        	}
        }
        
        //PRIVATE METHODS
        
        ResourceHandler.prototype._isAllResourcesReady = function()
        {
        	for(var resource in this.m_mExpectedResources)
        	{
        		if(this.m_mExpectedResources[resource]=="expected")
        		{
        			return false;
        		}
        	}
        	return true;
        }

        return ResourceHandler;
});