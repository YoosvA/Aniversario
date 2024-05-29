$(document).ready(function() {
    $('.imgOverlay').click(function() {
        var $img = $(this);
        if ($img.hasClass('img-overlay-large')) {
            $img.removeClass('img-overlay-large');
        } else {
            $('.imgOverlay').removeClass('img-overlay-large'); // Remove large class from other images
            $img.addClass('img-overlay-large');
        }
    });
});
     