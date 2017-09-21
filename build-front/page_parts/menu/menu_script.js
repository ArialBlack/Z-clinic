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
    });

}(jQuery));


