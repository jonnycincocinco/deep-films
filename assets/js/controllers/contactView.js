angular.module('Deepfilms.controllers')

.controller('contactView', ['getElement', '$scope', '$rootScope', '$state', 'PostsByType', '$window', function (getElement, $scope, $rootScope, $state, PostsByType, $window) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'contact not-work inner-page';

    $scope.emailAddress = "Anastacia@deepfilms.com";

    $(function() {

        function initMap() {

            var container = document.getElementById('map');
            var mapOptions = {
              zoom: 14,
              center: {lat: 37.849365, lng: -122.4818788},
              disableDefaultUI: false,
              styles: [{
                stylers: [{
                  saturation: -100
                }]
              }]
            };

            var map = new google.maps.Map(container, mapOptions);

            var infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);

            service.getDetails({
                placeId: 'ChIJkekZCkiEhYAR41wCuOT8wQ0'
            }, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
            //        infowindow.setContent(place.name);
            //        infowindow.open(map, this);
                });
                // google.maps.event.addListener(map,'center_changed',function() {
                //   window.setTimeout(function() {
                //     map.panTo(marker.getPosition());
                //   }, 400);
                // });
            }


          });
        }

        initMap();
    });




}]);
