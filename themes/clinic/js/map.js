(function ($) {
  $(function () {
    function toggleBounce(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    
      try {
        map = null;
        console.log('map is running');
        function initialize(placeToShow) {
          
          var mapId = document.getElementById("map");
          
          var directionsDisplay = new google.maps.DirectionsRenderer({
            preserveViewport: true
          });

          var latitude = 50.4327114;
          var longitude = 30.5274209;
          if (placeToShow === 'lviv') {
            latitude = 25.124536;
            longitude = 55.379437;
          }
          var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            zoom: 15,
            styles: [
              {
                "featureType": "landscape",
                "stylers": [
                  {"color": "#dfdfdf"}
                ]
              }, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                  {"color": "#dfdfdf"}
                ]
              }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                  {"hue": "#bcc8d6"},
                  {"color": "#bcc4d1"}
                ]
              }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {"hue": "#bcc8d6"},
                  {"color": "#657357"}
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {"hue": "#bcc8d6"},
                  {"color": "#657357"}
                ]
              }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  {"color": "#ffffff"}
                ]
              }, {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                  {"color": "#ffffff"}
                ]
              }, {
                "featureType": "transit.station.rail",
                "elementType": "geometry.stroke",
                "stylers": [
                  {"color": "#657357"}
                ]
              }, {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                  {"color": "#657357"}
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {"color": "#657357"}
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {"color": "#929f85"}
                ]
              }, {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {"color": "#657357"}
                ]
              }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {"color": "#b3bcca"}
                ]
              }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  {"hue": "#657357"}
                ]
              }, {
                "featureType": "transit",
                "elementType": "labels.icon.rail",
                "stylers": [
                  {"hue": "#2f5739",
                    "color": "#b3bcca"
                  }
                ]
              }, {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#2f5739"
                  }
                ]
              },
              {
                "featureType": "transit.station.bus",
                "elementType": "labels.icon",
                "stylers": [
                  {"hue": "#2f5739",
                    "color": "#000000"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {"color": "#2f5739"}
                ]
              }
            ]
          };
          map = new google.maps.Map(mapId, mapOptions);
          map.setZoom(15);
          var marketPositionLat = 50.4372142;
          var marketPositionLon = 30.5201172;
          if (placeToShow === 'lviv') {
            marketPositionLat = 25.124536;
            marketPositionLon = 55.379437;
          }
          var markerPosition = {
            lat: marketPositionLat,
            lng: marketPositionLon
          };
  
          var secondMarkerPosition = {
            lat: 50.4286493,
            lng: 30.5319515
          };
          
          var firstMarkerText = '<div class="default-text">Zablotsky clinic</div> <span class="address"> Kyiv, Sportyvna str. 1a</span>';
          if (placeToShow === 'lviv') {
            firstMarkerText = '<div class="default-text">Zablotsky clinic</div> <span class="address"> Lviv</span>';
          }
          var secondMarkerText = '<div class="default-text">Zablotsky clinic</div> <span class="address"> Kyiv, Hospitlna str. 5</span>';
          if (placeToShow === 'lviv') {
            secondMarkerText = '<div class="default-text">Zablotsky clinic</div> <span class="address"> Lviv</span>';
          }
          
          var infowindowForFirst = new google.maps.InfoWindow({
            content: firstMarkerText
          });
  
          var infowindowForSecond = new google.maps.InfoWindow({
            content: secondMarkerText
          });
          
          //TODO: replace icon url to regular one.
          var marker = new google.maps.Marker({
            position: markerPosition,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'https://image.ibb.co/b60Pr5/location_mark.png'
          });
          //TODO: replace icon url to regular one.
          var secondMarker = new google.maps.Marker({
            position: secondMarkerPosition,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: 'https://image.ibb.co/b60Pr5/location_mark.png'
          });
          
          
          marker.addListener('click', function () {
            toggleBounce(marker);
            infowindowForFirst.open(map, marker);
          });
          
          secondMarker.addListener('click', function () {
            toggleBounce(secondMarker);
            infowindowForSecond.open(map, secondMarker);
          });
          
          google.maps.event.trigger(map, "resize");
          directionsDisplay.setMap(map);
          // calculateAndDisplayRoute(directionsService, directionsDisplay);
          
          google.maps.event.addDomListener(window, "resize", function () {
            
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
            
          });
          
        }
        
        google.maps.event.addDomListener(window, "load", function () {
          initialize();
        });
        setTimeout(function () {
          var center = map.getCenter();
          google.maps.event.trigger(map, "resize");
          map.setCenter(center);
        }, 500);
        
        $('#contacts_kyiv').on('click', function() {
          initialize();
        });
        
        $('#contacts_lviv').on('click', function() {
          initialize('lviv');
        });
      } catch (err) {
        console.log('Map is not allowed on this page');
      }
  });
}(jQuery));
