$(document).ready(function(){
		$("#clickMe").click(function() {
			$("img").fadeIn(1000);
			$("#picframe"). slideToggle("slow");
		});
		$("#picframe").click(function() {
			$("#clickMe").slideToggle("slow");
			$("img").slideToggle("slow");

		});
});