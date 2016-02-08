$( function() {

	var $panzoom = $('.viewer_image');
	var $panzoom__buttons = $('.viewer_controls');
	$panzoom.panzoom({
		$zoomIn: $panzoom__buttons.find(".viewer_control-in"),
		$zoomOut: $panzoom__buttons.find(".viewer_control-out"),
		$zoomRange: $panzoom__buttons.find(".viewer_control-range"),
		$reset: $panzoom__buttons.find(".viewer_control-reset")
	});
	$panzoom.parent().on('mousewheel.focal', function (e) {
		e.preventDefault();
		var delta = e.delta || e.originalEvent.wheelDelta;
		var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
		$panzoom.panzoom('zoom', zoomOut, {
			increment: 0.1,
			focal: e
		});
	});

	function requestFullscreen(element) {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	}

	$('.viewer_control-fullscreen').click(function() {
		var viewer = document.getElementById('main');
		requestFullscreen(viewer);
	})

	$('.metadata_select').change( function() {
		var section = $(this).val();
		$('.metadata_section:not(.-' + section + ')').hide();
		$('.metadata_section.-' + section).show();
	}).change();

});
