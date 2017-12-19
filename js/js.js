
$(function() {
	var $mainCarousel = $('.js-main-carousel');
	if(!$mainCarousel.length) return;

	var $mainCarouselArrPrev = $mainCarousel.find('.js-main-carousel-arr-prev'),
		$mainCarouselArrNext = $mainCarousel.find('.js-main-carousel-arr-next');

	$mainCarousel.carousel({
		interval: 5000
	});

	$mainCarouselArrPrev.on('click', function(){
		$mainCarousel.carousel('prev');
		return false;
	});

	$mainCarouselArrNext.on('click', function(){
		$mainCarousel.carousel('next');
		return false;
	});

	

});