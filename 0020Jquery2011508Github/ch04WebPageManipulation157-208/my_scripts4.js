$(document).ready(function(){
		
		$("#vegOn1").click(function() {
			$f = $(".fish").parent().parent().detach(); //записываем элемент в переменную и скрываем
			$("h2").replaceWith("<h1>My Menu</h1>");//Заменяем элемент
			$(".hamburger").replaceWith("<li class = portobello> Portobello Mushroom 555</li>");
			//$(".meat").before("<li class = tofu> Tofu </li>"); //добавляем элемент до 
			$(".meat").after("<li class =tofu> Tofu 555 </li>");	//after после
			$(".tofu").parent().parent().addClass("veg_leaf");

			$m = $(".meat").detach();//удаляем элемент и записываем в переменную
		});
		
		
		
		$("#vegOn2").click(function() {
			$(".menu_entrees"). children().detach()
		});
		$("#vegOn3").click(function() {
			$(".menu_entrees"). children().detach()
		});
		$("#vegOn4").click(function() {
			$(".menu_entrees"). children().detach()
		});
		$("#vegOn5").click(function() {
			$(".menu_entrees li").first().before($f); //Добавляем F 
			$(".portobello").replaceWith("<li class = hamburger > hamburger 555</li>");
			$(".tofu").each(function(i){
				$(this).after($m[i]);
			});
			$(".tofu").remove();
			$(".meat").parent().parent().removeClass("veg_leaf");


		});
});




/* 
		$("h2").click(function() {
			alert("You rang2?");
		});
		//$(".guess_box").click(checkForCode1);
		$(".guess_box").click(checkForCode2);
		
		function checkForCode1()	 {
		
			$(".guess_box li").remove();
			var discount = Math.floor((Math.random()*5) + 5);
		    var discount_msg = "<h2> You discount: " + discount + "%</h2>"
			  alert(discount_msg);
			$("p").append(" <strong>Like me, for instance.</strong>");
			$(this).append(" <li> You discount: " + discount + "%</li>");
			
			$(".guess_box").each(function(){
				$(this).unbind("click");
			});
			//$(this).slideToggle("slow");
			}
		function getRandom(num)	 {
				var discount1 = Math.floor(Math.random()*num);
			return discount1;
		}    
		var discount1 = getRandom(4);
		alert (discount1);
		
		var hideCode = function houdini(){
			var numRand = getRandom(4);
			$(".guess_box").each(function(index, value) { 
				if(numRand == index){
					$(this).append("<span id='has_discount'></span>");
				return false;
				} 
			});
		}
		hideCode();
		
		function checkForCode2(){
			var discount;
			if($.contains(this, document.getElementById("has_discount") ) )
				{
					var my_num = getRandom(100);
					discount = "<p>discount " + my_num + "</p>";
			}else{
					discount = "<p>Sorry, no discount this time!</p>" ;
			}
			$(".guess_box").each(function(){
					if($.contains(this, document.getElementById("has_discount") ) )
					{
						$(this).addClass("discount");
					}else{
						$(this).addClass("no_discount");
					}
					$(this).unbind("click");
			});
			
			$("#result").append(discount);
			
			}
		 // End checkForCode function 

			$(".guess_box").hover(
	  function () {
		$(this).addClass("my_hover");
	   },
	   function () {
		  $(this).removeClass("my_hover");
	   });  // End hover
		
			$("#btn1").click( function(){
				$("#main2").addClass("hover");
				$("#main2").removeClass("no_hover");
			});
			$("#btn2").click( function(){
					$("#main2").removeClass("hover");
					$("#main2").addClass("no_hover");
			});
		$("#main").click(function() {
			alert("You rang4?");
		});
		$("#btnRemove").click(function(){
			$("li").remove();
		});
}); */