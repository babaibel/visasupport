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
		language: 'ru',
		autoclose: true
	});
})

$(function() {

	var $select = $('.js-select');
	if(!$select.length) return;

	$select.selectize({
		readOnly: true, 
		onDelete: function() { return false }
	});

});

$(function() {

	var $selectSearch = $('.js-select-search');
	if(!$selectSearch.length) return;

	$selectSearch.selectize({
		create: false,
		sortField: 'text'
	});

});

$(function() {

	$('select.js-select--toggle').on('change', function(){
		$('.js-select--toggle-box').hide();
		$('body').find(".js-select--toggle-box[data-index='" + $(this).val() + "']").show(); 
	});

});

$(function() {

	var $route = $('.js-route');
	if(!$route.length) return;

	var $routeRow = $route.find('.js-route-row:last-child').html(),
		$routeDelBtn = $route.find('.js-route-row:first-child .btn-right__btn').html()

	$(document).on('click','.js-route-add',function(){
		$(this).parent().html($routeDelBtn);
		$route.append($routeRow);
	});

	$(document).on('click','.js-route-del',function(){
		$(this).closest('.js-route-row').remove();
	});

});

$(function() {

	var $selectPrice = $('.js-select-price');
	if(!$selectPrice.length) return;

	$selectPrice.selectize({
		create: false,
		readOnly: true, 
		onDelete: function() { return false },
		onInitialize: function () {
			var s = this;
			this.revertSettings.$children.each(function () {
				$.extend(s.options[this.value], $(this).data());
			});
		},
		render: {
			option: function (item, escape) {
				return '<div>' + item.html + '</div>';
			},
			item: function (item, escape) {
				if (!item.html) {
					$.extend(item,
					$(this.revertSettings.$children)
						.filter('[value=' + item.value + ']').data()
					);
				}
				return '<div class="item">' + item.html + '</div>';
			}
		}
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