$(document).ready(function () {
	$('.fancybox').fancybox({
	    helpers: {
	        media: {}
	    }
	});
});

$( function() {

  var $container = $('#container');

  $container.imagesLoaded( function() {
    $container.masonry({
      columnWidth: function( containerWidth ) {
        return containerWidth / 3
      }
    });
  });
  
});

$(function(){

  // Instantiate MixItUp:

  $('#posts').mixItUp();


  //slider       
$('#top-image').bxSlider({

pager:false,

auto:true,

mode:'fade',

speed:1000


});




});

smoothScroll.init();