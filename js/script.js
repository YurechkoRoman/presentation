
$(document).ready( function(){
	$('.slider-offer').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	$('.slider-hot').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

 

	$('a[href*="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
		}, 800);
		e.preventDefault();
		});
		return false;

})
	



function initMap() {
	 var italy = {lat: 42.3, lng: 13.08};
	 var spain, france;
    var map = new google.maps.Map(document.getElementById('map'), {
	    center: italy,
	    zoom: 5,
	    styles:  [
		  {
		    elementType: 'geometry',
		    stylers: [
		      {
		        color: "#f5f5f5"
		      }
		    ]
		  },
		  {
		    elementType: "labels.icon",
		    stylers: [
		      {
		        visibility: "off"
		      }
		    ]
		  },
		  {
		    elementType: "labels.text.fill",
		    stylers: [
		      {
		        color: "#616161"
		      }
		    ]
		  },
		  {
		    elementType: "labels.text.stroke",
		    stylers: [
		      {
		        color: "#f5f5f5"
		      }
		    ]
		  },
		  {
		    featureType: "administrative.land_parcel",
		    elementType: "labels.text.fill",
		    stylers: [
		      {
		        color: "#bdbdbd"
		      }
		    ]
		  },
		  {
		    featureType: "poi",
		    elementType: "geometry",
		    stylers: [
		      {
		        color: "#eeeeee"
		      }
		    ]
		  },
		  {
		    featureType: "poi",
		    elementType: "labels.text.fill",
		    stylers: [
		      {
		        color: "#757575"
		      }
		    ]
		  },
		  {
		    featureType: "poi.park",
		    elementType: "geometry",
		    stylers: [
		      {
		        color: "#e5e5e5"
		      }
		    ]
		  },
		  {
		    featureType: "poi.park",
		    elementType: "labels.text.fill",
		    stylers: [
		      {
		        color: "#9e9e9e"
		      }
		    ]
		  },
		  {
		    featureType: "road",
		    elementType: "geometry",
		    stylers: [
		      {
		        color: "#ffffff"
		      }
		    ]
		  },
		  {
		    featureType: "road.arterial",
		    elementype: "labels.text.fill",
		    stylers: [
		      {
		        color: "#757575"
		      }
		    ]
		  },
		  {
		    featureType: "road.highway",
		    elementType: "geometry",
		    stylers: [
		      {
		        color: "#dadada"
		      }
		    ]
		  },
		  {
		    featureType: "road.highway",
		    elementType: "labels.text.fill",
		    stylers: [
		      {
		        color: "#616161"
		      }
		    ]
		  },
		  {
		    featureType: "road.local",
		    elementype: "labels.text.fill",
		    stylers: [
		      {
		        color: "#9e9e9e"
		      }
		    ]
		  },
		  {
		    featureType: "transit.line",
		    elementype: "geometry",
		    stylers: [
		      {
		        color: "#e5e5e5"
		      }
		    ]
		  },
		  {
		    featureType: "transit.station",
		    elementType: "geometry",
		    stylers: [
		      {
		        color: "#eeeeee"
		      }
		    ]
		  },
		  {
		    featureType: "water",
		    elementType: "geometry",
		    stylers: [
		      {
		        color: "#c9c9c9"
		      }
		    ]
		  },
		  {
		    featureType: "water",
		    elementType: "labels.text.fill",
		    stylers: [
		      {
		        color: "#9e9e9e"
		      }
		    ]
		  }
		]
    });

    var locations = [
    	[italy, 42.3, 13.08],
    	[spain, 39.7413108,  -2.6594272],
    	[france, 45.7805862, 3.6859283],
    ]

 	for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: 'marker.png'
            
        });
    }


}






