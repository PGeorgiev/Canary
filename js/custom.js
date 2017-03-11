/*
Template: Canary
Author: Canary - Coming Soon Template
Author URL: http://wphero.eu/themes/Canary-html;
Version: 1.1
*/



(function(jQuery){

// Fade on load.
// Here you can see all sections and elements which you can animate in our Canary coming soon template.
jQuery(window).load(function(){
		setTimeout(function(){
			jQuery('#loverlay-content').fadeOut(400, function(){
				jQuery('#loverlay').fadeOut(100);
			});
		}, 200);
});

// Animation on ready.
// Here you can see all sections and elements which you can animate in our Canary coming soon template.
// Use animate.css classes to add cool animations! Example: try to change 'bounceInDown' to 'bounceInLeft'.
// Notice: don't change setTimeout parameter.
jQuery(window).ready(function(){

	setTimeout(function(){
  	jQuery('.inner-header').addClass('animated bounceInLeft');
  	}, 500);

	setTimeout(function(){
  	jQuery('.section-title').addClass('animated bounceInLeft');
  	}, 450);

	setTimeout(function(){
  	jQuery('#clock').addClass('animated bounceInLeft');
  	}, 400);

	setTimeout(function(){
  	jQuery('.subtitle').addClass('animated bounceInLeft');
  	}, 350);

	setTimeout(function(){
  	jQuery('#subscribe').addClass('animated bounceInLeft');
  	}, 250);

	setTimeout(function(){
  	jQuery('.social').addClass('animated bounceInLeft');
  	}, 200);

})

// Modal window animation .
// Here you can see all modal window sections and elements which you can animate in our Canary coming soon template.
// Use animate.css classes to add cool animations! Example: try to change 'bounceInDown' to 'bounceInLeft'.
// Notice: don't change setTimeout parameter.
jQuery(window).ready(function(){

	setTimeout(function(){
  	jQuery('.one-half:first-child').addClass('animated bounceInLeft');
  	}, 350);

  	setTimeout(function(){
  	jQuery('.one-half:last-child').addClass('animated bounceInLeft');
  	}, 200);

});

// Open modal window.
jQuery('#modal_window-open').click(function(e) {
			var main_wrap = jQuery('#main-wrap .inner'),
				modal_window = jQuery('#modal_window');

				main_wrap.animate({ opacity: 0 }, 100, function(){
				jQuery('html,body').scrollTop(0);
				modal_window.addClass('modal_window-active').fadeIn(200);
			});
			e.preventDefault();

				jQuery('#modal_window-close').click(function(e){
					modal_window.removeClass('modal_window-active').fadeOut(200, function(){
						main_wrap.animate({ opacity: 1 }, 100);
					});
					e.preventDefault();
				});
});


jQuery(document).ready( function(){
// Placeholder plugin.
jQuery('input, textarea').placeholder();

// Change background image.
// Upload files in images folder and write here name of your image.
jQuery.backstretch('images/bg3.jpg');

// Default start day - 2 May, 2014 ).
// Change the start_day value.
var start_day = new Date(2017, 15-1, 8);
jQuery('#clock').countdown({
until: start_day
});


// Validate form.
jQuery('<div class="loading"><span class="bounce1"></span><span class="bounce2"></span><span class="bounce3"></span></div>').hide().appendTo('.form-wrap');
jQuery('<div class="success"></div>').hide().appendTo('.form-wrap');
	jQuery('#subscribe-form').validate({
			messages: {
				subscribe_email: {
				required: 'Email address is required',
				email: 'Please enter valid email address'
				}
			},
			rules: {
				subscribe_email: { required: true, email: true }
			},
			errorElement: 'span',
			errorPlacement: function(error, element){
				error.appendTo(element.parent());

			},
			submitHandler: function(form){
				jQuery(form).hide();
				jQuery('#subscribe .loading').css({ opacity: 0 }).show().animate({ opacity: 1 });
				jQuery.post(jQuery(form).attr('action'), jQuery(form).serialize(), function(data){
					jQuery('#subscribe .loading').animate({opacity: 0}, function(){
					jQuery(this).hide();
					jQuery('#subscribe .success').show().html('<p>Thanks for subscribe</p>').animate({opacity: 1});
				});
				});
			return false;
			}
	});
});

})(jQuery);
