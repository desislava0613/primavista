$(document).ready(function(){
	$(".lightBox").on("click", function(){
	  $(".gallerysecond__backDrop").animate({"opacity": ".70"}, 500);
	  $(".gallerysecond__box").animate({"opacity": "1.0"}, 500);
	  $(".gallerysecond__backDrop, .gallerysecond__box").css("display", "block");
	});
	
	$(".thumb ").on("click", function(){
	  var largeImage = $(this).attr("src");
	  $(".gallerysecond__largeImage").attr({src: largeImage});
	});
	
	$(".gallerysecond__close, .gallerysecond__backDrop").on("click", function(){
	  closeBox();
	});
  
	function closeBox(){
	  $(".gallerysecond__backDrop, .gallerysecond__box").animate({"opacity": "0"}, 500, function(){
	  $(".gallerysecond__backDrop, .gallerysecond__box").css("display", "none");
	  });
	}
  });