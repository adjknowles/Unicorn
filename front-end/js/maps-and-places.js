$(document).ready(function(){
  captureLatLng();
  displayMap();
  $('#add-place-to-form').on('click', captureLatLng);
  $('#form-new-startup').on('submit', postStartup);
});

function captureLatLng(){
  event.preventDefault();

  // Place Search Box is created using google maps places & is linked to the html input box
  var placeSearchBox = new google.maps.places.Autocomplete(document.getElementById('place-search-box'));

  google.maps.event.addListener(placeSearchBox, 'places_changed', function(){
    var place = placeSearchBox.getPlace();
    var placeLatitude  = '';
    var placeLongitude = ''; 
    console.log(place);
    if(place) {

      var bounds = new google.maps.LatLngBounds();
      var icon = 'http://orig11.deviantart.net/cb61/f/2010/190/d/b/rainbow_unicorn_icon_by_unicornmolester.gif';
      var marker = new google.maps.Marker({
        map: map, //I am not sure that this is getting the 'map' object
        icon: image,                              
        title: place.name,
        position: place.geometry.location
      });
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());

      placeLatitude  = place.geometry.location.lat();
      placeLongitude = place.geometry.location.lng();
      $("#new-startup-latitude").val(placeLatitude);
      $("#new-startup-longitude").val(placeLongitude);
    }
  })

  // hard coding for now.
  placeLatitude  = '51.5072';
  placeLongitude = '0.1275'; 
  $("#new-startup-latitude").val(placeLatitude);
  $("#new-startup-longitude").val(placeLongitude);
}

function postStartup(){
  event.preventDefault();
  // var data = $(this).serialize();
  var data = {
    name:         $("#new-startup-name").val(),
    headquarters: $("#new-startup-headquarters").val(),
    latitude:     $("#new-startup-latitude").val(),
    longitude:    $("#new-startup-longitude").val(),
    founders:     $("#new-startup-founders").val(),
    sector:       $("#new-startup-sector").val(),
    email:        $("#new-startup-email").val(),
    phone:        $("#new-startup-phone").val(),
    website:      $("#new-startup-website").val(),
    twitter:      $("#new-startup-twitter").val(),
    facebook:     $("#new-startup-facebook").val(),
    photo:        $("#new-startup-photo").val(),
    logo:         $("#new-startup-logo").val(),
  };

  $.ajax({
    method:     'post', //method,
    url:        'https://localhost:3000/api/startups', //url,
    data:       data,
    beforeSend: setRequestHeader
  })
  .done(function(data){
    return showStartup(data);
  })
  .fail(function(data){
    displayErrors(data.responseJSON.message);
  });
}

// function displayOOMap(){
//   var Map =  Map || {};
//   var mapOptions, canvas, map;
//   var markers = [];
//   var addressBox = new google.maps.places.SearchBox(document.getElementById('addressbox'));
//   Map.initializeMap = function(){
//     Map.mapOptions = {
//       zoom:14,
//       center: {lat: 51.5072, lng: 0.1275},
//       mapTypeId:google.maps.MapTypeId.ROADMAP
//     };
//     canvas = document.getElementById('googleMap');
//     map = new google.maps.Map(canvas, mapOptions);
//   }
// }

function displayMap(){
  //Initialize map variables
  var mapOptions, canvas, map;
  var markers = [];
  //Search box variable
  var searchBox = new google.maps.places.SearchBox(document.getElementById('searchbox'));

  //Directions variables
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  
  var mapApp = {};

  mapApp.initializeMap = function(){
    mapOptions = {
      zoom:14,
      center:new google.maps.LatLng(51.5072, 0.1275),
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    canvas = document.getElementById('googleMap');
    map = new google.maps.Map(canvas, mapOptions);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  };

  mapApp.searchBox = function(){
    var places = searchBox.getPlaces();
    //Looping through and removing previous markers form the map;
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }
    //Deleting previous markers
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    
    for (var i = 0, place; place = places[i]; i++) {
      console.log(place);
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,                              
        title: place.name,
        position: place.geometry.location
      });
      //mapping the bounds of the map around the location; 
      markers.push(marker);
      bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds); 
    
  };

  mapApp.directions = function(){
    //Remove previous routes from directionsDisplay;
    if (directionsDisplay != undefined){
      directionsDisplay.setDirections({routes: []});
    }
    var from = $('#directions_from').val();
    var to = $('#directions_to').val();
    var mode = $('#directions_mode').val();

    var request = {
      origin:from,
      destination:to,
      travelMode:google.maps.TravelMode[mode]
    }
    
    directionsDisplay.setMap(map);

    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(response);
        $('#directions-panel').html("");
        directionsDisplay.setPanel(document.getElementById('directions-panel'))
      } else {
        alert('Something went wrong');
      }
    });
  }

  mapApp.updateLocation = function(position){
    var coords = position.coords;
    var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'You are here'
    })

    map.setCenter(latlng);
  }

  mapApp.handleLocationError =  function(error){
      console.log(error);
  }

  mapApp.geolocation =  function(){
    navigator.geolocation.getCurrentPosition(mapApp.updateLocation, mapApp.handleLocationError);
  }

  //SearchBox event listener;
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    mapApp.searchBox();
  })

  //Clear the searchBox when we click on it; 
  $('#searchbox').on('click', function(){
    $(this).val('');
  })

  //Directions event listener;
  $('#directions_form').on('submit', function(event){
    event.preventDefault();
    mapApp.directions();
  })

  //Geolocation event listener, remember for local development you need to start a Python server;
  $('#current_position').on('click', function(event){
    event.preventDefault();
    if(navigator.geolocation){
      mapApp.geolocation();
    } else {
      alert('Geolocation not available in this browser');
    }
  })

  mapApp.initializeMap();
}    