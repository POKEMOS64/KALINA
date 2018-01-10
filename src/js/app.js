

$('#navi_open').click(function(){
    $('.header_menu, #navi_close').fadeIn(400); //показываем всплывающее окно
    $('#navi_open').fadeOut(400); //показываем всплывающее окно
  });
$(' #navi_close').click(function(){
			$('.header_menu, #navi_open').fadeOut(400); //показываем всплывающее окно
			$('#navi_close').fadeOut(400); //показываем всплывающее окно
	$('#navi_open').fadeIn(400); //показываем всплывающее окно
		});
$('.h_button').click(function(){
			$('.exampleModal').fadeIn(400); //показываем всплывающее окно
		});

$('.header_menu ul').on('click','a', function(event){
	event.preventDefault();
	
	var id = $(this).attr("href"),
			top = $(id).offset().top;
	$('body,html').animate({scrollTop: top},1500);
});

$('.owl-carousel').owlCarousel({
		loop:true,
    margin:10,
    nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});