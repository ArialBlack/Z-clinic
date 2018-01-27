'use strict';
(function ($) {
	var menuClass = '.menu-sub'
		, $navRollups = $('.menu_nav-rollup, .menu_contacts-rollup');

    $(document).ready(function(){
    	$(document).click( function(event){
    		if( $(event.target).closest(menuClass).length )
    			return;
    		$navRollups.collapse('hide');
    	});
    	
    	if($('body').hasClass('node-13')) {
    	  $("#block-kontaktivsapku-kiiv #paragraphID-3").hide();
        $("#block-kontaktivsapku-kiiv #paragraphID-146").hide();
        $('#block-kontaktivsapku-lviv #paragraphID-7').hide();
        $('#block-kontaktivsapku-lviv #paragraphID-8').hide();
        $('#contacts_kyiv #footer_clinic').hide();
        $('#contacts_lviv #footer_clinic').hide();
      }
    });

}(jQuery));


