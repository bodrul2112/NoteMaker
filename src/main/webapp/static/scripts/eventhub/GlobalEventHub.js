
define(["thirdparty/jquery"],

    function(jQuery) {

        GlobalEventHub = function( )
        {
        	this.m_mEventNameToCallBacks = {};
        }

        GlobalEventHub.prototype.on = function( sEventName, fCallback )
        {
        }

        return GlobalEventHub;
});