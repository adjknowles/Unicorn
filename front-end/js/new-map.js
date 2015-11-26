$(function(){
  mapApp.init();
  mapApp.addMarkers('startups');
  mapApp.addMarkers('workspaces');
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

mapApp.addMarkers = function(markerType){
  ajaxRequest("get", "http://localhost:3000/api/" + markerType, null, function(data){
    console.log(data);
    // console.log(data["workspace"]);
    console.log(markerType);
    mapApp.clearMarkers();
    $.each(data[markerType], function(index, marker){
      console.log(marker)
      mapApp.addMarkerWithTimeout(marker, markerType , index * 200);
      
      // var phoneHTML = '';
      // if(marker.telephone){
      //   telephoneHTML = '';
      // }
      var twitterHTML = '';
      if(marker.twitter) {
        twitterHTML = '<a href="' + marker.twitter + '" class="btn">Twitter</a>';
      }
      // var addressHTML = '';
      // if(marker.headquarters){
      //   addressHTML = '<a href="https://www.google.com/maps/place/' + marker.headquarters + '" class="btn">' + marker.headquarters + '</a>';
      // }
      // if(marker.address) {
      //   addressHTML = '<a href="https://www.google.com/maps/place/' + marker.address + '" class="btn">' + marker.address + '</a>';
      // }
      var dataHTML   = '';
      var singleHTML = '';
      $.each(marker, function(key, value) {
        if(value){
          singleHTML = '<p class="card-text">' +
          '<img src="./images/'+ key +'.png" class="small-icon" aria-label="' + key + 'icon">' + key + ': ' + value + 
          '</p>';
          dataHTML   = dataHTML + singleHTML;
        }
      });
      
      var markerHTML = 
'<li id="' + marker._id + '">' +      
  '<div class="card">' + 
    '<div class="card-content">' + 
      '<p class="card-title"><img src="'+ mapApp.icons[markerType] +'.png" class="small-icon">' + marker.name + '</p>' +   
      dataHTML + 
    '</div>' + 
    '<div class="card-action activator">' + 
      '<p><a href="' + marker.website + '" class="btn">Website</a>' + 
      twitterHTML + 
      '<i class="medium mdi-navigation-expand-less right" aria-label="reveal twitter stream" ></i></p>' +
    '</div>' + 
    '<div class="card-reveal">' + 
      '<span class="card-title">' + marker.name + '\'s Twitter feed<i class="medium mdi-navigation-close right" aria-label="close twitter stream"></i></span>' + 
      '<p>Here are tweets from ' + marker.name + ' account!</p>' + 
    '</div>' + 
  '</div>' + 
'</li>';

      $("#results").append(markerHTML);
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
    workspaces: 'http://i.imgur.com/J6p1ops.png',
    startups:   'http://i.imgur.com/zSIbR3c.jpg'
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
      var contentHTML = 
      '<ul>' + 
        '<li class="infowindowtitle">'+ marker.title +'</li>' + 
      '</ul>';

      var infoWindow = new google.maps.InfoWindow({
        content: contentHTML
      });
      marker.addListener('click', function(){
        infoWindow.open(mapApp.map, marker);
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

mapApp.addInfoWindowToMarker = function(marker, id){
  var contentHTML = 
  '<ul>' + 
    '<li class="infowindowtitle">'+ marker.title +'</li>' +
    '<li class="infowindowlink"><a href="#' + id + '">For further information, please click here</a></li>'+
  '</ul>';

  var infoWindow = new google.maps.InfoWindow({
    content: contentHTML
  });
  marker.addListener('click', function(){
    infoWindow.open(mapApp.map, marker);
  });
  return marker;
}

mapApp.addMarkerWithTimeout = function(marker, markerType, timeout) {
  window.setTimeout(function() {
    var position = new google.maps.LatLng(marker.latitude, marker.longitude);
    var gmMarker = new google.maps.Marker({
      map:       mapApp.map,
      icon:      mapApp.icons[markerType],
      animation: google.maps.Animation.DROP,
      title:     marker.name,
      position:  position
    });
    mapApp.markers.push(mapApp.addInfoWindowToMarker(gmMarker, marker._id), timeout);
  });
}