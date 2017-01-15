$('.paper .collapse').not('.invert').hide();
$('.paper .collapse .invert').show();
$('.paper .dontcollapse').show();

$('.paper').on('click', null, function() { 
	$(this).closest('.paper').find(".collapse").toggle(); 
	$(this).closest('.paper').find(".dontcollapse").show(); 
});
