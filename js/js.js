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

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('.datepicker').datepicker({
		language: 'ru'
	});
})

$(function() {

	var $select = $('.js-select');
	if(!$select.length) return;

	$select.selectize({
		create: true,
		sortField: 'text'
	});

});

$(function() {
	var $scrollBtn = $('.js-scroll-btn');
	if(!$scrollBtn.length) return;

	$scrollBtn.on('click', function(){
		var top = $(this).closest('.header').next().position().top;
		$('body,html').animate({scrollTop: top}, 600);
	});
});


$(function() {

	$('.js-popup').magnificPopup({
		type:'inline',
		midClick: true,
		showCloseBtn: false
	});

	$('.js-popup-close').on('click',function(){
		$.magnificPopup.close();
	});

});

$(function() {

	var $contactMap = $('.js-contact-map');
	if(!$contactMap.length) return;

	var map,
		center = {lat: 50.683942, lng: 7.182441},
		centerTablet = {lat: 50.683942, lng: 7.172441},
		centerMobile = {lat: 50.688942, lng: 7.155931},
		point = {lat: 50.683942, lng: 7.155931},
		wWidth = $(window).width(),
		controlBool = true;

		if(wWidth < 991){
			center = centerTablet
		}

		if(wWidth < 767){
			center = centerMobile;
			controlBool = false;
		}

	(function initMap() {
		map = new google.maps.Map(document.getElementById('contact-map'), {
		center: center,
		zoom: 14,
		scrollwheel: true,
		mapTypeControl: controlBool,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.TOP_LEFT
		},
		zoomControl: controlBool,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		scaleControl: controlBool,
		streetViewControl: controlBool,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		fullscreenControl: controlBool,
		fullscreenControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
		});
		var marker = new google.maps.Marker({
			position: point,
			map: map
		});
	})();

});



function onYouTubePlayerAPIReady() {
	var playerYoutube,
			youtubeId = $('.js-youtube').data('id') + '';

	playerYoutube = new YT.Player("video-youtube__content", {
		videoId: youtubeId,
		playerVars: {
			// 'controls': 0,
			// 'showinfo': 0,
			// 'autohide': 1
		},
		events: {
			onReady: onYouTubePlayerReady
		}
	});
}

function onYouTubePlayerReady(event) {
	// https://developers.google.com/youtube/iframe_api_reference#Events
	var targetYoutubeVideo = event.target;
	var videoDomElem = document.getElementById(
	event.target.getIframe().getAttribute("id")
	);
	var newPLayBtn = videoDomElem.nextElementSibling;

	newPLayBtn.addEventListener("click", function(event) {
	targetYoutubeVideo.playVideo();
		this.classList.add('hidden');
		videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
		videoDomElem.parentNode.classList.remove('video-youtube_overlay');
	});
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);