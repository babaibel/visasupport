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

$(function() {

	$('.js-select').selectize({
		create: true,
		sortField: 'text'
	});

});

$(function() {

	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true,
		showCloseBtn: false
	});

});

$(function() {

	var $gMap = $('.js-map'),
		map,
		center1 = {lat: 50.684823, lng: 7.182441},
		point = {lat: 50.683942, lng: 7.155931};

	function initMap() {
		map = new google.maps.Map($gMap, {
		  center: center1,
		  zoom: 14,
		  scrollwheel: true,
		  scaleControl: true,
		  mapTypeControl: true
		});
		var marker = new google.maps.Marker({
			position: point,
			map: map
		});
	}

});

function onYouTubePlayerAPIReady() {
	var playerYoutube;

	playerYoutube = new YT.Player("video-youtube__content", {
	videoId: "cxXUEDbOxgo",
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