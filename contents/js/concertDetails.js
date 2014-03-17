$( document ).ready(function() {
    init();
});

function init(){
	disablingFields(true);
}

function disablingFields(isDisabled){
	$("#concertDetailForm input").prop("disabled",isDisabled);
	$("#concertDetailForm select").prop("disabled",isDisabled);
	$("#concertDetailForm textarea").prop("disabled",isDisabled)	
}



