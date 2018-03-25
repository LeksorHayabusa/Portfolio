
      function initMap() {
        var uluru = {lat: 54.352, lng: 18.6466};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }



$(document).ready(function(){

		'use strict';
/***************Google map*************/

	/***************Scroll header line of content menu*****************/
		
		var w = $(window);
        var header = $('#fixed_header');
    	var headerHeight = $('.menu-wrapper').css('height');
    	headerHeight = parseInt(headerHeight, 10);
    	var main = $('main');
    	var mainHeight = main.css('height');
    	mainHeight = parseInt(mainHeight, 10);
		var openMenu = $('#open_menu_button');
		var closeMenu = $('.close-menu');
		var menuList = $('#menu_list');
		var mainLinks = $('.content-link');
		var footer = $('#contacts');
    	var footerHeight = footer.css('height');
    	footerHeight = parseInt(footerHeight, 10);		
		var footerButton = $('#footer_button');
		var footerMenu = $('#footer_menu');
		var footerButtonHeight = footerButton.css('height');
		var readMoreButton = $('.read-more');
		
	/************************************************************/	

		w.on('scroll', function(e) {
            header.addClass('fixed');
			menuList.addClass('hidden');
			footer.css({'position':'relative',
							'top':main.offset().top})
            if (w.scrollTop()>150) {
				main.animate({
					top:headerHeight
				});
                header.animate({
                	top:'0'
                }, 400);
            } 
        });

	/************** main content menu***********/
		openMenu.on('click', function(e){
			menuList.removeClass('hidden');
		})
		closeMenu.on('click',function(){
			menuList.addClass('hidden');
		})
			
	/************** auto scrolling from content menu to certain content ***********/
		mainLinks.on('click', function(e){
	/****** testing values ****/
			e.preventDefault();
			let target = $(e.currentTarget);
			let targetAttr = target.attr('href');
			$('html, body').animate({
		    	scrollTop: ($(targetAttr).offset().top - headerHeight)
			}, 1500);
		})
/****************read more content************/
		readMoreButton.on('click', function(e){
			let target = $(e.currentTarget);
			let readMoreWrapper = target.prev('.content-wrapper');
			console.log('readmore pushed');
			e.preventDefault();
			readMoreWrapper.removeClass('content-wrapper');
			console.log(target);
			target.remove();
		})
		

/*************footer contants menu************/
		footerButton.on('click', function(e){
			e.preventDefault();
			footerMenu.addClass('footer-fixed-menu')
			footerMenu.animate({
				bottom:'0'			
			})
		})
		main.on('click', function(e){
			e.preventDefault();
			footerMenu.animate({
				bottom:'-100vw'			
			}, 500);
			setTimeout(function(){
				footerMenu.removeClass('footer-fixed-menu');
			}, 500);
		})


})


