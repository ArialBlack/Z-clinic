'use strict';
(function ($) {
	var menuClass = '.menu_nav, .menu_contact'
		, $navRollups = $('.menu_nav-rollup, .menu_contacts-rollup');

    $(document).ready(function(){
    	$(document).click( function(event){
    		if( $(event.target).closest(menuClass).length )
    			return;
    		$navRollups.collapse('hide');
    	});
    });

}(jQuery));


