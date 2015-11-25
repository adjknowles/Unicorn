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
    name:         mapApp.newStartup.name || $("#new-startup-name").val(),
    headquarters: mapApp.newStartup.formatted_address || $("#new-startup-headquarters").val(),
    latitude:     mapApp.startupLat || '',
    longitude:    mapApp.startupLng || '',
    email:        mapApp.newStartup.email || $("#new-startup-email").val(),
    phone:        mapApp.newStartup.formatted_phone_number || $("#new-startup-phone").val(),
    website:      mapApp.newStartup.website || $("#new-startup-website").val(),
    founders:     $("#new-startup-founders").val(),
    sector:       $("#new-startup-sector").val(),
    twitter:      $("#new-startup-twitter").val(),
    facebook:     $("#new-startup-facebook").val(),
    photo:        $("#new-startup-photo").val(),
    logo:         $("#new-startup-logo").val(),
  };

  ajaxRequest(method, url, data, callback) 
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

mapApp.postWorkspace = function(){
  event.preventDefault();

  var data = {

    // name:         mapApp.newWorkspace.name || $("#new-workspace-name").val(),
    // address: mapApp.newWorkspace.formatted_address || $("#new-workspace-address").val(),
    // latitude:     mapApp.workspaceLat || '',
    // longitude:    mapApp.workspaceLng || '',
    // email:        mapApp.newWorkspace.email || $("#new-workspace-email").val(),
    // phone:        mapApp.newWorkspace.formatted_phone_number || $("#new-workspace-phone").val(),
    // website:      mapApp.newWorkspace.website || $("#new-workspace-website").val(),
    // founders:     $("#new-workspace-founders").val(),
    // sector:       $("#new-workspace-sector").val(),
    // twitter:      $("#new-workspace-twitter").val(),
    // facebook:     $("#new-workspace-facebook").val(),
    // photo:        $("#new-workspace-photo").val(),
    // logo:         $("#new-workspace-logo").val(),
  };

  ajaxRequest(method, url, data, callback) 
  $.ajax({
    method:     'post', //method,
    url:        'https://localhost:3000/api/workspaces', //url,
    data:       data,
    beforeSend: setRequestHeader
  })
  .done(function(data){
    return showWorkspace(data);
  })
  .fail(function(data){
    displayErrors(data.responseJSON.message);
  });
}


mapApp.init = function(){

  mapApp.canvas = document.getElementById('googleMap');
  mapApp.center = new google.maps.LatLng(51.5072, 0.1275)
  mapApp.mapOptions = {
    zoom: 14,
    center: mapApp.center,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(mapApp.canvas, mapApp.mapOptions);

  mapApp.markers = [];

  // Icons for markers
  mapApp.startupIcon   = 'http://i.imgur.com/zSIbR3c.jpg';
  mapApp.workspaceIcon = 'http://i.imgur.com/J6p1ops.png';

  
  // Get data with AJAX
  // allStartups = data.startups;

  // mapApp.dropMarkers = function() {
  //   mapApp.clearMarkers();
  //   for (var i = 0; i < allStartups.length; i++) {
  //     mapApp.addMarkerWithTimeout(allStartups[i], i * 200);
  //   }
  // }

  // mapApp.clearMarkers = function() {
  //   for (var i = 0; i < mapApp.markers.length; i++) {
  //     mapApp.markers[i].setMap(null);
  //   }
  //   mapApp.markers = [];
  // }

  // mapApp.addMarkerWithTimeout = function(position, timeout) {
  //   window.setTimeout(function() {
  //     mapApp.markers.push(new google.maps.Marker({
  //       position: position,
  //       map: map,
  //       animation: google.maps.Animation.DROP
  //     }));
  //   }, timeout);
  // }

  // Main Search Box
  mapApp.mainSearchBox = new google.maps.places.Autocomplete(document.getElementById('main-search-box'));
  google.maps.event.addListener(mapApp.mainSearchBox, 'place_changed', function(){
    mapApp.place = mapApp.mainSearchBox.getPlace();
  });
  google.maps.event.addDomListener(window, 'resize', function(){
    mapApp.map.setCenter(mapApp.center);
  });

  // Add Google Autocomplete box to startup-search-box input
  mapApp.startupSearchBox = new google.maps.places.Autocomplete(document.getElementById('startup-search-box'));
  google.maps.event.addListener(mapApp.startupSearchBox, 'place_changed', function(){
    mapApp.newStartup = '';
    mapApp.newStartup = mapApp.startupSearchBox.getPlace();
    console.log(mapApp.newStartup);   
    var icon = mapApp.startupIcon;
    var marker = new google.maps.Marker({
      map:       mapApp.map,
      icon:      icon,
      animation: google.maps.Animation.DROP,
      title:     mapApp.newStartup.name,
      position:  mapApp.newStartup.geometry.location
    });
    // Recenter the map onto the newStartup position
    mapApp.map.setCenter(mapApp.newStartup.geometry.location);
  });

  // Add Google Autocomplete box to workspace-search-box input
  mapApp.workspaceSearchBox = new google.maps.places.Autocomplete(document.getElementById('workspace-search-box'));
  google.maps.event.addListener(mapApp.workspaceSearchBox, 'place_changed', function(){

    mapApp.newWorkspace = mapApp.workspaceSearchBox.getPlace();   
    var icon = mapApp.startupIcon;
    var marker = new google.maps.Marker({
      map:      mapApp.map,
      icon:     icon,
      animation: google.maps.Animation.DROP,
      title:    mapApp.newWorkspace.name,
      position: mapApp.newWorkspace.geometry.location
    });
    // Recenter the map onto the newWorkspace position
    mapApp.map.setCenter(mapApp.newWorkspace.geometry.location);
  });

  // All search boxes have the class .search-box 
  // When you click or focus back into the box, empty it
  $('.search-box').on('click', function(){
    $(this).val('');
  })
  $('.search-box').on('focus', function(){
    $(this).val('');
  })

}