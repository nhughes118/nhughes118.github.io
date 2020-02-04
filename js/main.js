$(document).ready(function(){
	
	$('#top').click(function(){
		$('html,body').animate({scrollTop: 0}, 500);
	});
	
	$('.mobileMenu').click(function(){
		$('#topNav li').toggle("slide");
	});


}); // closes my document.ready