'use strict';
/*eslint-disable new-cap, no-unused-vars, 
  no-use-before-define, no-trailing-spaces, 
  no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,
  comma-spacing,no-spaced-func,space-infix-ops,
  key-spacing */
/*global  $, TweenMax, Elastic*/



$(function(){

	var stages = ['index', 'legal', 'wheel', 'email', 'sms', 'thankyou', 'coupon'];

	$.each(stages, function(i, s){
		$('.btn-' + s).on('click', function(){
			gotoStage(s);
		});
	});

	function gotoStage(stage){
		$.each(stages, function(idx, rm){
			if(this !== stage){
				$('body').removeClass(rm);
			}
		});
		$('body').addClass(stage);
	}

	$('.wheel-content .go').one('click', function(){
		var pick = $('.wheel-content .wheel').attr('data-pick') * 1 - 1;
		var count = $('.wheel-content .wheel').attr('data-item-count') * 1;
		var direction = 1;

		if(count === 6 || count === 7 || count === 8){
			direction = -1;
		}

		var rotate = (360 / count * pick * direction);
		rotate += 360 * Math.round(Math.random() * 15 + 5) * direction;
		TweenMax.to('.wheel-content .wheel figure .wheel-background, .wheel figure ul', 8,{
		  rotationZ: rotate,
		  ease: Elastic. easeOut.config( 0.6, 0.8),
		  onComplete: function(){
		  	$('.btn-thankyou').removeClass('hide').addClass('in');
		  }
		});

	});

	$('#expired').countdown('2016/05/01', function(event) {
		var weeks = event.strftime('%w') * 1;
		var days = event.strftime('%d') * 1;
		var total = weeks * 7 + days;
		$(this).html(event.strftime(total + ' : %H : %M : %S'));
	});

});
