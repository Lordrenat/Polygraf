$(document).ready(function() {
	$('.button').click( function() {
		if ($('#telephones').is(':hidden')){
			$(this).css('transform','rotate(-180deg)');
			$('#telephones').css('display','block');
		} else {
			$(this).css('transform','none');
			$('#telephones').css('display','none');
			}
	});
	
});