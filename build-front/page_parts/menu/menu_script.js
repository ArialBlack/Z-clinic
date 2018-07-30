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
        $('.header-logo_wrap > a').css('visibility', 'hidden');
    	  $("#block-kontaktivsapku-kiiv #paragraphID-3").hide();
        $("#block-kontaktivsapku-kiiv #paragraphID-146").hide();
        $('#block-kontaktivsapku-lviv #paragraphID-7').hide();
        $('#block-kontaktivsapku-lviv #paragraphID-8').hide();
        $('#contacts_kyiv #footer_clinic').hide();
        $('#contacts_lviv #footer_clinic').hide();
        $('#footer_instagram').attr('href', 'http://instagram.com/dental.care.office/');
        $('#menu_nav_rollup .icon-nav-i').attr('href', 'http://instagram.com/dental.care.office/');
      }
    });

}(jQuery));


