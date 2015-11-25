$(function(){
  mapApp.init();
  mapApp.addMarkers();
  $('.add-place-to-form').on('click', mapApp.captureLatLng);
  $('#form-new-startup').on('submit', mapApp.postStartup);
})

var mapApp = mapApp || {};

mapApp.captureLatLng = function(){
  event.preventDefault();

  var $form = $(this).parent();
  var type  = $form.attr("id").replace("form-new-", "");
  console.log(type)

  for (i in mapApp.place) {
    $form.find("#" + i + "-" + type).val(mapApp.place[i]);
    if (i === "geometry") {
      $form.find("#lat-" + type).val(mapApp.place[i].location.lat());
      $form.find("#lng-" + type).val(mapApp.place[i].location.lng());
    }
  }
}

mapApp.addMarkers = function(){
  ajaxRequest("get", "http://localhost:3000/api/workspaces", null, function(data){
    mapApp.clearMarkers();
    $.each(data.workspaces, function(index, marker){
      console.log(marker)
      mapApp.addMarkerWithTimeout(marker, index * 200);

      $("#results").append("<li><h1>"+marker.name+"</h1></li>");
    })
  });
}

mapApp.removeAllMarkers = function(){

}

mapApp.postPlace = function(){
  event.preventDefault();

  var data   = $(this).serialize();
  var method = $(this).attr("method");
  var url    = 'https://localhost:3000/api' + $(this).attr("action");

  ajaxRequest(method, url, data, function(){
    console.log("Added place init")
  });
}


mapApp.init = function(){

  mapApp.canvas = document.getElementById('googleMap');
  mapApp.center = new google.maps.LatLng(51.507904, -0.127466)
  mapApp.mapOptions = {
    zoom: 13,
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

  mapApp.setupAutocompleteFields()

  google.maps.event.addDomListener(window, 'resize', function(){
    mapApp.map.setCenter(mapApp.center);
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

mapApp.setupAutocompleteFields = function(){
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
}

mapApp.clearMarkers = function() {
  for (var i = 0; i < mapApp.markers.length; i++) {
    mapApp.markers[i].setMap(null);
  }
  mapApp.markers = [];
}

mapApp.addMarkerWithTimeout = function(marker, timeout) {
  window.setTimeout(function() {
    var position = new google.maps.LatLng(marker.latitude, marker.longitude);

    mapApp.markers.push(new google.maps.Marker({
      position: position,
      map: mapApp.map,
      icon: mapApp.icons["workspace"],
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}