$( document ).ready(function() {
    init();
});

function init(){
	
	//injecting Login page in index.html
	$("#loginDiv").load("/app/views/login.html"); 
	$(document).foundation();
}