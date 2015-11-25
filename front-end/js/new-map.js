$(function(){
  mapApp.init();

  $('#add-place-to-form').on('click', mapApp.captureLatLng);
  $('#form-new-startup').on('submit', mapApp.postStartup);
})

var mapApp = mapApp || {};

mapApp.captureLatLng = function(){
  event.preventDefault();
  // When we click
  // console.log(mapApp.newStartup);
  mapApp.startupLat = mapApp.newStartup.geometry.location.lat();
  mapApp.startupLng = mapApp.newStartup.geometry.location.lng();

  $("#new-startup-latitude").val(mapApp.startupLat);
  $("#new-startup-longitude").val(mapApp.startupLng);
  $("#new-startup-website").val(mapApp.newStartup.website);
  $("#new-startup-name").val(mapApp.newStartup.name);
}

mapApp.addMarker = function(){
  
}

mapApp.removeAllMarkers = function(){

}

mapApp.postStartup = function(){
  event.preventDefault();

  var data = {
    name:         $("#new-startup-name").val(),
    headquarters: $("#new-startup-headquarters").val(),
    latitude:     mapApp.startupLat,
    longitude:    mapApp.startupLng,
    founders:     $("#new-startup-founders").val(),
    sector:       $("#new-startup-sector").val(),
    email:        $("#new-startup-email").val(),
    phone:        $("#new-startup-phone").val(),
    website:      mapApp.newStartup.website,
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

mapApp.init = function(){

  var markers = [];

  var canvas = document.getElementById('googleMap');
  var center = new google.maps.LatLng(51.5072, 0.1275)
  var mapOptions = {
    zoom: 14,
    center: center,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);

  // Top SearchBox
  var searchBox = new google.maps.places.Autocomplete(document.getElementById('searchbox'));
  google.maps.event.addListener(searchBox, 'place_changed', function(){
    mapApp.place = searchBox.getPlace();
    // Add either zoom in on place, or add marker or whatever
    console.log(mapApp.place);
  });
  google.maps.event.addDomListener(window, 'resize', function(){
    mapApp.map.setCenter(center);
  });

  // Add new search bar
  var placeSearchBox = new google.maps.places.Autocomplete(document.getElementById('place-search-box'));
  google.maps.event.addListener(placeSearchBox, 'place_changed', function(){

    mapApp.newStartup = placeSearchBox.getPlace();
    // Add either zoom in on place, or add marker or whatever
    
    var icon = 'http://orig11.deviantart.net/cb61/f/2010/190/d/b/rainbow_unicorn_icon_by_unicornmolester.gif';

    var marker = new google.maps.Marker({
      map: mapApp.map,
      icon: icon,
      title: mapApp.newStartup.name,
      position: mapApp.newStartup.geometry.location
    });

    // Recenter the map onto the newStartup position
    mapApp.map.setCenter(mapApp.newStartup.geometry.location);
    console.log(mapApp.newStartup);
  });


  $('.places-autocomplete-box').on('click', function(){
    $(this).val('');
  })

}