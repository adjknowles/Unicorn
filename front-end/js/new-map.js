$(function(){
  mapApp.init();
})

var mapApp = mapApp || {};

mapApp.init = function(){

  var markers = [];

  var canvas = document.getElementById('googleMap');
  var center = new google.maps.LatLng(51.5072, 0.1275)
  var mapOptions = {
    zoom: 14,
    center: center,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(canvas, mapOptions);

  // Top SearchBox
  var searchBox = new google.maps.places.Autocomplete(document.getElementById('searchbox'));
  google.maps.event.addListener(searchBox, 'place_changed', function(){
    mapApp.place = searchBox.getPlace();
    // Add either zoom in on place, or add marker or whatever
    console.log(mapApp.place);
  });
  google.maps.event.addDomListener(window, 'resize', function(){
    map.setCenter(center);
  });

  // Add new search bar
  var placeSearchBox = new google.maps.places.Autocomplete(document.getElementById('place-search-box'));
  google.maps.event.addListener(placeSearchBox, 'place_changed', function(){
    mapApp.newStartup = placeSearchBox.getPlace();
    // Add either zoom in on place, or add marker or whatever
    console.log(mapApp.newStartup);
  });

  
}