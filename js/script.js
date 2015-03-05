var map;
var panel;
var initialize;
var calculate;
var direction;
var cityCircle;


function initialize() {
    'use strict';
    map = new google.maps.Map(document.getElementById("map_canvas"), 
        { zoom: 5, center: new google.maps.LatLng(48.858565, 2.347198), 
            mapTypeId: google.maps.MapTypeId.ROADMAP });

  direction = new google.maps.DirectionsRenderer();
  direction.setMap(map);
  direction.setPanel(document.getElementById('panel'));

}


if (navigator.geolocation)
  var watchId = navigator.geolocation.watchPosition(successCallback,
    null,
    {enableHighAccuracy:true});
else
  alert("Votre navigateur ne prend pas en compte la géolocalisation");   

function successCallback(position){
  'use strict';
  map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),  
    map: map

  });
  var infowindow = new google.maps.InfoWindow({ content: 'Vous êtes ici !' });
  google.maps.event.addListener(marker, 'click', function() { infowindow.open(map, marker); });
}
function calculate(){
  'use strict';
  origin      = document.getElementById('origin').value;
  destination = document.getElementById('destination').value;

  if(origin && destination){
    var request = {
      origin      : origin,
      destination : destination,
      travelMode  : google.maps.DirectionsTravelMode.DRIVING
    }
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        direction.setDirections(response);
      }
    });
  }
};

document.getElementById('full').addEventListener('click', function(){
  full();
})


function Lactarius(){
  'use strict';
  var elem = document.getElementById("map_canvas");

  var citymap = {};
  citymap['amérique du nord'] = {
    center: new google.maps.LatLng(37.5,-110,3),
    population: 2714856
  };

  citymap['asie'] = {
    center: new google.maps.LatLng(8.7197676,116.607154),
    population: 2714856
  };

  citymap['amerique centrale'] = {
    center: new google.maps.LatLng(12.768421,-84.714944),
    population: 2714856
  };


  var cityCircle;

  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    };
    cityCircle = new google.maps.Circle(populationOptions);
  }
}

function girolle(){
  'use strict';
  var elem = document.getElementById("map_canvas");

  var citymap = {};
  citymap['morbihan'] = {
    center: new google.maps.LatLng(47.744376, -2.8851265),
    population: 2714856
  };

  citymap['corse'] = {
    center: new google.maps.LatLng(42.1805878,9.0473778),
    population: 8405837
  };


  var cityCircle;

  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#800000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#800000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    };
    cityCircle = new google.maps.Circle(populationOptions);
  }
}

function clavaire(){
  'use strict';
  var elem = document.getElementById("map_canvas");

  var citymap = {};
  citymap['australie'] = {
    center: new google.maps.LatLng(-26.4390743,133.281323),
    population: 8405837
  };

  citymap['nouvelle-zelande'] = {
    center: new google.maps.LatLng(-43.3744881,172.4662705),
    population: 8405837
  };

  citymap['amerique nord'] = {
    center: new google.maps.LatLng(37.5,-110,3),
    population: 8405837
  };

  citymap['amerique sud'] = {
    center: new google.maps.LatLng(-21.7351043,-63.28125),
    population: 8405837
  };

  citymap['danemark'] = {
    center: new google.maps.LatLng(55.9396761,9.5155848),
    population: 8405837
  };


  var cityCircle;

  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#FF1493',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF1493',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    };
    cityCircle = new google.maps.Circle(populationOptions);
  }
}

function full(){
  'use strict';
  var elem = document.getElementById("map_canvas");
  if (elem.requestFullScreen) {
    elem.requestFullScreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen();
  }
}