$(function(){
  mapApp.init();

  $('.add-place-to-form').on('click', mapApp.captureLatLng);
  $('#form-new-startup').on('submit', mapApp.postStartup);
})

var mapApp = mapApp || {};

mapApp.captureLatLng = function(){
  event.preventDefault();
  console.log("mapApp.captureLatLng --> new-map")

  // When we click
  console.log(mapApp.newWorkspace);

  mapApp.workspaceLat = mapApp.newWorkspace.geometry.location.lat();
  mapApp.workspaceLng = mapApp.newWorkspace.geometry.location.lng();

  $("#new-workspace-latitude").val(mapApp.workspaceLat);
  $("#new-workspace-longitude").val(mapApp.workspaceLng);
  $("#new-workspace-website").val(mapApp.newWorkspace.website);
  $("#new-workspace-name").val(mapApp.newWorkspace.name);
}

mapApp.addMarker = function(){
  
}

mapApp.removeAllMarkers = function(){

}

mapApp.postStartup = function(){
  event.preventDefault();
  console.log("mapApp.postStartup --> new-map")

  var data = $(this).serialize();

  // ajaxRequest(method, url, data, callback);

  // $.ajax({
  //   method:     'post', //method,
  //   url:        'https://localhost:3000/api/startups', //url,
  //   data:       data,
  //   beforeSend: setRequestHeader
  // })
  // .done(function(data){
  //   return showStartup(data);
  // })
  // .fail(function(data){
  //   displayErrors(data.responseJSON.message);
  // });
}

mapApp.postWorkspace = function(){
  event.preventDefault();

  var data   = $(this).serialize();
  var method = $(this).attr("method");
  var url    = 'https://localhost:3000/api' + $(this).attr("action");

  ajaxRequest(method, url, data, function(){
    console.log("Added workspace init")
  });

  // $.ajax({
  //   method:     'post', //method,
  //   url:        'http://localhost:3000/api/workspaces', //url,
  //   data:       data,
  //   beforeSend: setRequestHeader
  // }).done(function(data){
  //   console.log("here")
  //   return showWorkspace(data);
  // }).fail(function(data){
  //   displayErrors(data.responseJSON.message);
  // });
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
  mapApp.icons = {
    workspace: 'http://i.imgur.com/J6p1ops.png',
    startup: 'http://i.imgur.com/zSIbR3c.jpg'
  }

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

  var fields = ["startup-search-box", "workspace-search-box"];

  $.each(fields, function(index, field) {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById(field));

    google.maps.event.addListener(autocomplete, 'place_changed', function(){

      mapApp.place = autocomplete.getPlace();
    
      var icon = mapApp.icons[field.split("-")[0]];

      var marker = new google.maps.Marker({
        map:       mapApp.map,
        icon:      icon,
        animation: google.maps.Animation.DROP,
        title:     mapApp.place.name,
        position:  mapApp.place.geometry.location
      });

      // Recenter the map onto the newStartup position
      mapApp.map.setCenter(mapApp.place.geometry.location);
    });
  })

  google.maps.event.addDomListener(window, 'resize', function(){
    mapApp.map.setCenter(mapApp.center);
  });



  // // Add Google Autocomplete box to startup-search-box input
  // mapApp.startupSearchBox = new google.maps.places.Autocomplete(document.getElementById('startup-search-box'));
  // google.maps.event.addListener(mapApp.startupSearchBox, 'place_changed', function(){

  //   mapApp.newStartup = '';
  //   mapApp.newStartup = mapApp.startupSearchBox.getPlace();
    
  //   console.log(mapApp.newStartup);   
    
  //   var icon = mapApp.startupIcon;
  //   var marker = new google.maps.Marker({
  //     map:       mapApp.map,
  //     icon:      icon,
  //     animation: google.maps.Animation.DROP,
  //     title:     mapApp.newStartup.name,
  //     position:  mapApp.newStartup.geometry.location
  //   });

  //   // Recenter the map onto the newStartup position
  //   mapApp.map.setCenter(mapApp.newStartup.geometry.location);
  // });

  // Add Google Autocomplete box to workspace-search-box input
  // mapApp.workspaceSearchBox = new google.maps.places.Autocomplete(document.getElementById('workspace-search-box'));
  // google.maps.event.addListener(mapApp.workspaceSearchBox, 'place_changed', function(){

  //   mapApp.newWorkspace = mapApp.workspaceSearchBox.getPlace(); 

  //   console.log("init --> mapApp.newWorkspace: ", mapApp.newWorkspace)

  //   var icon = mapApp.startupIcon;
    
  //   var marker = new google.maps.Marker({
  //     map:      mapApp.map,
  //     icon:     icon,
  //     animation: google.maps.Animation.DROP,
  //     title:    mapApp.newWorkspace.name,
  //     position: mapApp.newWorkspace.geometry.location
  //   });

  //   // Recenter the map onto the newWorkspace position
  //   mapApp.map.setCenter(mapApp.newWorkspace.geometry.location);
  // });

  // All search boxes have the class .search-box 
  // When you click or focus back into the box, empty it
  $('.search-box').on('click', function(){
    $(this).val('');
  })
  $('.search-box').on('focus', function(){
    $(this).val('');
  })

}