$('.pageScroll').on('click', function(e){
	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen
	var elemenTujuan = $(tujuan);
	// console.log(elemenTujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1230);

	e.preventDefault(); 
})

// parallax

$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	console.log(wScroll);

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll*0.27 +'%)'
	});

	$('.jumbotron h3').css({
		'transform' : 'translate(0px, '+ wScroll*0.34 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll*0.30 +'%)'
	});

	if( wScroll > $('.portfolio').offset().top - 370 ){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 200 * (i + 1));
		})

	}


});

