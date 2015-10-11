$(function(){
    
    $(window).smartload(function(){
        "use strict";
        
        // Set your google maps parameters
        var $latitude = 37.789679, // If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
            $longitude = -122.407857,
            $map_zoom = 16; // Zoom setting

        // Google map custom marker icon
        var $marker_url = 'assets/img/map-marker-icon.png';
        
        // We define here the style of the map (https://snazzymaps.com/style/38/shades-of-grey)
        var style = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ab813b"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffecce"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#a8b7cb"},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#2d4b70"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d5bf6d"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":"-41"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#a8b7cb"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"lightness":"85"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#3c3377"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#a8b7cb"},{"lightness":"50"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"lightness":"65"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#837daf"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffecc0"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#7389a6"}]}];

        // Set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        };
        
        // Inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        
        // Add a custom marker to the map				
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url
        });
    });
});