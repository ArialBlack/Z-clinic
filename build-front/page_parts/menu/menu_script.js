'use strict';
(function ($) {
	var menuClass = '.menu_nav, .menu_contact'
		, $navRollups = $('.menu_nav-rollup, .menu_contact-rollup');

    $(document).ready(function(){
    	$(document).click( function(event){
    		if( $(event.target).closest(menuClass).length )
    			return;
    		$navRollups.collapse('hide');
    	});
        console.log('run menu script !');
    });

}(jQuery));


