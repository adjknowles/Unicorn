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
      var dataHTML   = '';
      var singleHTML = '';
      var itemsForShow = ['twitter', 'facebook', 'website'];

      $.each(marker, function(key, value) {
        if (itemsForShow.indexOf(key) > -1){
          if (value){
            singleHTML =
            '<li>' + 
              '<a href="'+value+'" target="_blank"><img src="./images/'+ key +'.png" class="small-icon" aria-label="' + key + 'icon"></a>'
            '</li>'
            dataHTML = dataHTML + singleHTML;
          }  
        }
      });

      var address   = marker.address ? marker.address : marker.headquarters;
      var telephone = marker.telephone ? marker.telephone : marker.phone;
      
      var markerHTML = 
      '<li id="' + marker._id + '">' +      
        '<div class="card">' + 
          '<div class="card-content">' + 
            '<p class="card-title"><span><img src="'+ mapApp.icons[markerType] + '" class="small-icon"></span>' + marker.name + '</p>' +
            '<p>'+ address + '</p>' +
            '<p>'+ telephone + '</p>' + 
            '<ul class="card-text">'+  
            dataHTML + 
            '</ul>' +
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

  var mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
    {
      "color": "#444444"
    }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.icon",
    "stylers": [
    {
      "saturation": "15"
    },
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "geometry",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.icon",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
    {
      "color": "#f6f6f6"
    }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
    {
      "saturation": -100
    },
    {
      "lightness": 45
    }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "simplified"
    }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
    {
      "color": "#00bc66"
    },
    {
      "visibility": "on"
    }
    ]
  }
  ];

  mapApp.canvas = document.getElementById('googleMap');
  mapApp.center = new google.maps.LatLng(51.507904, -0.127466)
  mapApp.mapOptions = {
    zoom:        13,
    styles:      mapStyle,
    scrollwheel: false,
    center:      mapApp.center,
    mapTypeId:   google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(mapApp.canvas, mapApp.mapOptions);

  mapApp.markers = [];

  // Icons for markers
  mapApp.icons = {
    workspaces: 'http://i.imgur.com/tKSZiPA.png',
    startups:   'http://i.imgur.com/VNfevVP.png'
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
    
      var icon = mapApp.icons[field.split("-")[0]+"s"];

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