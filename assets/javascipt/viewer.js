$(document).ready(function () {
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
});
