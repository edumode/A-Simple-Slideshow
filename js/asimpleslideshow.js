//A Simple Slideshow
//Create César Vásquez
//Version 1.0
//Effects Jquery Ui Only effects blind, bounce, clip, drop, fade, fold, pulsate, shake, slide
//E-mail cesarvasz@gmail.com 
//Last update 05/03/2015
//MIT License


$(document).ready(function() {
	
	$.fn.simpleslideshow = function(custom){
		
		var customize = {
					width: 		"1000px", //Width in pixels
					height: 	"500px", //Height in pixels
					effect: 	"drop", /*Only effects blind, bounce, clip, drop, 
										fade, fold, pulsate, shake, slide*/
					delay: 		700, //Time effect
					progressbar: true, // True or false
					bottombar: 	true, // True or false
					numbers: 	true, // True or false
					text: 		true, // True or false
					thumbs: 	true,//True or false
					thumbs_extn: "jpg",//Extenxion image
			};jQuery.extend(customize,custom);
		
		//Inicializacion
		var index = 1;
			var cant = $(this).find("img").length;
			var cont = $(this);
				$(this).css({"width":customize.width,"height":customize.height});
				$(this).find("img").css({"width":customize.width,"height":customize.height});
				$(this).find("img:first-child").css("z-index",index);
				$(this).append("<div id='arrows'><div id='left'></div><div id='right'></div></div>");
				$("#arrows").css({"width":customize.width,"height":"40px","margin-top":size(2,20)}).fadeOut(0);
				$(this).append('<div id="progressbar"></div>');
				$("#progressbar").css({"margin-top":size(1,35)});$("#progressbar").fadeOut(0);
				$(this).hover(function(){
					$("#arrows").css("z-index",(index + 50)).fadeIn(300);
					},function(){
						$("#arrows").fadeOut(300);
						});
			
		//Barra inferior
		if(customize.bottombar){
				$(this).append('<div id="bar"></div>');
				$("#bar").css({"width":customize.width,"height":"30px","margin-top":size(1,30)});
				if(customize.text){
					$("#bar").append('<div id="text"></div>');
					$("#text").text($(this).find("img:first-child").attr("alt"));
					}
				if(customize.numbers){
					$("#bar").append('<div id="numbers"></div>');
					for(var i = 1; i < (cant+1);i++){
					$("#numbers").append('<div id="num'+i+'" class="number">'+i+'</div>')}
					}
					 $("#num1").addClass("select");
				 }
				
				
			if(customize.progressbar){
				$("#progressbar").fadeIn(0);
				}
		
		//Numeros
		$(".number").click(function(){
				for(var i = 1; i < (cant+1); i++){
					var imagen = $("#img" + i);
					if($(this).attr("id") == ("num" + i) && imagen.css("z-index") != (index)) {
					index++;
					imagen.fadeOut(0).css("z-index",index).toggle(customize.effect,customize.delay);
					text(imagen);
					remove();
					$("#num"+i).addClass("select");
					rein(); 
						}	
					}
				})
				
		//Thumbs
		$(".number").hover(function(){
			if(customize.thumbs){
			var id = $(this).attr("id");
			var x = $(this).position();
			cont.append("<span><img id='thumb' src='thumbs/"+id+"."+customize.thumbs_extn+"'/></span>");
			$("#thumb").css({"margin-top":size(1,115),"margin-left":(x.left-60),"z-index":(index+5)});
			}},function(){
				$("#thumb").remove();
				})
		
		//Flechas
		$("#right").click(der);
			
			$("#left").click(function(){
				var change = index;
				for(var i = 1; i < (cant+1); i++){
				if(change == index){
					if($("#img1").css("z-index") == (index)){
						index++;
						$("#img"+cant).fadeOut(0).css("z-index",index).toggle(customize.effect,customize.delay);
						text($("#img"+cant));
						remove();
						$("#num"+cant).addClass("select");
						rein(); 
						} else {
							if($("#img" + i).css("z-index") == (index)){
								index++;
								$("#img"+(i-1)).fadeOut(0).css("z-index",index).toggle(customize.effect,customize.delay);
								text($("#img"+(i-1)));
								remove();
								$("#num"+(i-1)).addClass("select");
								rein(); 
							}}
					}
				}
					})
			
			
			function der(){
				var change = index;
					for(var i = 1; i < (cant+1); i++){
						if(change == index){
						if($("#img"+i).attr("id") == ("img"+cant)){
						index++;
						$("#img1").fadeOut(0).css("z-index",index).toggle(customize.effect,customize.delay);
						text($("#img1"));
						remove();
						$("#num1").addClass("select");
						rein(); 
								} else {
									if($("#img" + i).css("z-index") == (index)){
									index++;
									$("#img"+(i+1)).fadeOut(0).css("z-index",index).toggle(customize.effect,customize.delay);
									text($("#img"+(i+1)));
									remove();
									$("#num"+(i+1)).addClass("select");
									rein(); 
									}}}}
					}
		
		
		//Funciones de tamaño, texto y remover clase
		function size(a,b){
				var size2 = (customize.height.slice(0,(((customize.height).length)-2))/a)-b
				return size2;
				}
				
		function text(texto){
				$("#text").text(texto.attr("alt")).fadeOut(0).toggle("fade",500)
				}	
				
		function remove(){
			for(var i = 1; i < (cant+1); i++){
				$("#num"+i).removeClass("select");
				}
			}
		
			
		//Tiempo
		var pro = 0;
		setInterval(function progress(){
		if($("#progressbar").css("width") != (customize.width) || pro <= 100){
			$("#progressbar").css("width",(pro = pro + 1)+("px"));
			}else{
				rein();
				der();
				}
		},10);
		
		function rein(){
		$("#progressbar").css("width","0px");
				pro = 0;
		}
		
				
		}//Fin del plugin
});//Fin del document.ready  