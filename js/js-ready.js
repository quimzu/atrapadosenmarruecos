$(document).ready(function(){
			
		  	
		$('.popup').click(function(event) {
				  		    var width  = 575,
				  		        height = 400,
				  		        left   = ($(window).width()  - width)  / 2,
				  		        top    = ($(window).height() - height) / 2,
				  		        url    = this.href,
				  		        opts   = 'status=1' +
				  		                 ',width='  + width  +
				  		                 ',height=' + height +
				  		                 ',top='    + top    +
				  		                 ',left='   + left;
				  		
		 window.open(url, 'twitte', opts);
		 return false;
		
		
		});
		
			$('img[usemap]').rwdImageMaps();

		  	
		  	
//		Calcul  margin-top per continguts
		 		  
		var alcada = $(window).height();		  		  
		var alcada_max=$("#apartatFloor11 .capsa-info-doble").height();  		  
		var num =(alcada - 470)/2;		
		$('article').css('margin-top',num);
		
	if(alcada<700){
	
			$('body').addClass("laptop");
	
	}
		
		  		  
		  		  
 
		var refreshId = setInterval(function(){
			
			var url= window.location.href;
			var urlAux = url.split('#');
			
			
			
			
			if (urlAux[1] == '/atrapados') {
		$('#sidebar').fadeOut();
			$('.navegacio-botons').hide();
			$('#apartatFloor1 .navegacio-botons').show();
			
			}
			
			if  (urlAux[1] == '/video') {
		$('#sidebar').fadeOut();
			$('.navegacio-botons').hide();
			$('#apartatFloor2 .navegacio-botons').show();
			}
			
			if  (urlAux[1] =='/mapa') {
		$('#sidebar').fadeOut();
			$('.navegacio-botons').hide();
			$('#apartatFloor3 .navegacio-botons').show();
			}
			
			if (urlAux[1] == '/rabat') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.rabat').show();
			$('.navegacio-botons').hide();
			$('#apartatFloor4 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("rabat");
			$('article').removeClass().addClass("rabat");
			
			}
			
			if (urlAux[1] =='/violenciasexual') {
			$('#sidebar').fadeOut();
			$('.navegacio-botons').hide();
			$('#apartatFloor5 .navegacio-botons').show();
			}
			

			if ( urlAux[1] =='/marie') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.rabat').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor6 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("rabat");
			$('article').removeClass().addClass("rabat");
			
			}
			if (  urlAux[1] =='/beauty' ) {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.rabat').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor7 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("rabat");
			$('article').removeClass().addClass("rabat");
			
			}
			if (urlAux[1] =='/gala') {
			$('#sidebar').fadeIn()
			$('#sidebar ul').hide();
			$('#sidebar ul.rabat').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor8 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("rabat");
			$('article').removeClass().addClass("rabat");
			
			}
	
			
			if (urlAux[1] == '/oujda') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.oujda').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor9 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("oujda");
			$('article').removeClass().addClass("oujda");
			}
			
			if (urlAux[1] =='/entierradenadie') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.oujda').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor10 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("oujda");
			$('article').removeClass().addClass("oujda");
			}
			
			if (urlAux[1] =='/menoresymendigos') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.oujda').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor11 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("oujda");
			$('article').removeClass().addClass("oujda");
			}
			
			if (urlAux[1] == '/nador' ) {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.nador').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor12 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("nador");
			$('article').removeClass().addClass("nador");
			
			}
			
			if ( urlAux[1] =='/gurugu') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.nador').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor13 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("nador");
			$('article').removeClass().addClass("nador");
			
			}
			
			if ( urlAux[1] =='/cruzarelmar') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.nador').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor14 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("nador");
			$('article').removeClass().addClass("nador");
			
			}
			
			if (urlAux[1] == '/informe') {
			$('#sidebar').fadeIn();
			$('#sidebar ul').hide();
			$('#sidebar ul.informe').show();
			
			$('.navegacio-botons').hide();
			$('#apartatFloor15 .navegacio-botons').show();
			
			$('#sidebar').removeClass().addClass("informe");
			$('article').removeClass().addClass("informe");
			
				
			
			
			
			}
					
		
	
	
		
		}, 50);
			



$('#boto-oujda').mouseover(function() {
			 
			$('.info-mapa').hide(); 
 		 	$('#info-mapa-oujda').show(); 

 });	
 
 
 $('#boto-nador').mouseover(function() {
 			 
 			$('.info-mapa').hide(); 
  		 	$('#info-mapa-nador').show(); 
 
  });
  
  $('#boto-rabat').mouseover(function() {
  			 
  			$('.info-mapa').hide(); 
   		 	$('#info-mapa-rabat').show(); 
  
   });
 		  
 		  




$('#contingut').ascensor({
	AscensorName:'apartat',
	ChildType:'section',
	AscensorFloorName:'atrapados | video | mapa | rabat | violenciasexual | marie | beauty | gala | oujda | entierradenadie | menoresymendigos | nador | gurugu | cruzarelmar | informe',
	Time:1000,
	WindowsOn:1,
	WindowsFocus:true,
	Direction:'chocolate',
    AscensorMap:'1|1 & 2|1 & 3|1 & 4|1 & 4|2 & 4|3 & 4|4 & 4|5 & 5|1 & 5|2 & 5|3 & 6|1 & 6|2 & 6|3 & 7|1',
    Easing:"easeInOutQuad",
    KeyNavigation:true,
	QueuedDirection:"y",
	KeyArrow:true,
	keySwitch:true,
	Navig:false,
	ReturnCode:false,
		PrevNext:true,
	
 
});


   // Target your .container, .wrapper, .post, etc.
  // $(".video").fitVids();
/*Fem apareixer/desapareixer menu i boto scroll*/







//Precarregar imatges xarxes:
loadImage = new Image();
loadImage.src = "img/tw1.jpg";

loadImage2 = new Image();
loadImage.src = "img/fb1.jpg";

// Hover imatges Facebook i twitter
$(".xarxes_twitter").live("mouseover", function(){ 
 		 	$(this).attr("src", "img/tw1.jpg"); 

 		  });	
 $(".xarxes_twitter").live("mouseout", function(){ 
 	 		 	$(this).attr("src", "img/tw2.jpg"); 
	 
 	 	});
		
$(".fb-botton").live("mouseover", function(){ 
 		 	$(this).attr("src", "img/fb1.jpg"); 

 		  });	
 $(".fb-botton").live("mouseout", function(){ 
 	 		 	$(this).attr("src", "img/fb2.jpg"); 
	 
 	 	});

// $("#sidebar a").live("click", function(){ 
//	 		var url= window.location.href;
//			var urlAux = url.split('#');
//			alert (urlAux[1]);
//				
//				
//			if (urlAux[1] == '/atrapados' && '/video') {
//			$('#sidebar').hide();
//			}
//			
//			else if (posicio =='1') {
			//$('a#paginaPrev').addClass("bottom");
//			$('a#paginaNext').removeClass().addClass("bottom");
//			}
//				
//				
//				
//
// 	 	});
		

});



