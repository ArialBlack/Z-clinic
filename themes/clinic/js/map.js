(function ($) {
    $(function () {
        if (document.getElementById("map") === null) {
          return;
        }
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
                      latitude = 49.838475,
                      longitude = 24.0252484
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
                  if (placeToShow === 'lviv') {
                    map.setZoom(12);
                  }
                  var marketPositionLat = 50.438690;
                  var marketPositionLon = 30.523167;
                  if (placeToShow === 'lviv') {
                      marketPositionLat = 49.8617026;
                      marketPositionLon = 24.0264641;
                    }
                var secondMarkerPositionLat = 50.4288069;
                var secondMarkerPositionLon = 30.5340087;
                if (placeToShow === 'lviv') {
                  secondMarkerPositionLat = 49.8024075;
                  secondMarkerPositionLon = 24.0020403;
                }
                  var markerPosition = {
                      lat: marketPositionLat,
                      lng: marketPositionLon
                  };
        
                    var secondMarkerPosition = {
                      lat: secondMarkerPositionLat,
                      lng: secondMarkerPositionLon
                  };
                  
                    console.log('should be lviv', markerPosition, secondMarkerPosition);
                  var firstMarkerText = '<div class="default-text">Zablotskyy clinic</div> <span class="address">Спортивна 1a, Київ</span>';
                  
                  if (placeToShow === 'lviv') {
                    firstMarkerText = '<div class="default-text">Zablotskyy DCO</div> <span class="address">Липинського 28, Львів</span>';
                  }
                  
                  var secondMarkerText = '<div class="default-text">Zablotskyy clinic</div> <span class="address">Новогоспітальна 5, Київ</span>';
                  
                  if (placeToShow === 'lviv') {
                    secondMarkerText = '<div class="default-text">Zablotskyy DCO</div> <span class="address">Наукова 7D, Львів</span>';
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
  
                if (placeToShow === 'lviv') {
                  var thirdMarker = new google.maps.Marker({
                    position: {
                      lat: 49.838475,
                      lng: 24.0252484
                    },
                    map: map,
                    animation: google.maps.Animation.DROP,
                    icon: 'https://image.ibb.co/b60Pr5/location_mark.png'
                  });
  
                  var infowindowForThird = new google.maps.InfoWindow({
                    content: '<div class="default-text">Zablotskyy Clinic</div> <span class="address">Коперника 20, Львів</span>'
                  });
                  
                  thirdMarker.addListener('click', function () {
                    toggleBounce(thirdMarker);
                    infowindowForThird.open(map, thirdMarker);
                  });
                  
                }
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
      
                $('#footer_kyiv').on('click', function() {
                    initialize();
                  });
      
                $('#footer_lviv').on('click', function() {
                  console.log('lviv is on initialize');
                   initialize('lviv');
                });
            } catch (err) {
              console.log('Map is not allowed on this page');
            }
      });
  }(jQuery));
