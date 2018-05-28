
function initMap() {


  var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -27.495405, lng: 153.013286},
          zoom: 15
        });

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
          placeId: 'ChIJSXzrQYJQkWsR6e4QN22U6Zo'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });

        var myLatLng = {lat: -27.495405, lng: 153.011993};

        var name ="University of Queensland Real Hong Kong Dessert Store";
        var address = "St Lucia QLD 4072";
        var type = "main store";


       var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: name,
          type: type

        });


}
