
$(document).ready(function() {      
   $('.carousel').carousel('pause');
});

$window.on('scroll', check_if_in_view);