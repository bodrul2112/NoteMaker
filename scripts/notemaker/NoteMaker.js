
define(["thirdparty/jquery","services/TemplateService"], function(jQuery, tpl) {

    var NoteMaker = function( ){

    }

    NoteMaker.prototype.getElement = function(){
        return this.m_eElement;
    }

    return NoteMaker;

});