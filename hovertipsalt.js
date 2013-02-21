/*** HIGHLY Versatile and Lightweight Hover tip 
	 By: Michael Otte - February 20, 2013  ***/

$(document).ready(function() {

	$('.userbar_links').hover(function(){
		var specific_link = "[name='"+this.id+"_description']";
		
		/** if one wants to use fadeToggle() **/
		$(specific_link).stop(true,true).fadeToggle();
		
		/**if one wants to use css functions **/
		//$(specific_link).css({'display':'inline-block'});
		//$(specific_link).animate({'opacity':'1'});
	}).mousemove(function(e){
	var specific_link = "[name='"+this.id+"_description']";
	   		$(specific_link).offset({left: e.pageX, top: e.pageY});
	});
	
	/** if one wants to use css functions **/
	/*$('.userbar_links').on('mouseleave', function(e){
		
		var specific_link = "[name='"+this.id+"_description']";
		
			$(specific_link).css({'display':'none'});
		
		
	});*/
});	