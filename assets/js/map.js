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
        var style = [{"featureType":"all","elementType":"all","stylers":[{"saturation":"0"}]},{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#efc337"},{"lightness":"-15"},{"gamma":"1.00"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"lightness":"20"},{"visibility":"simplified"},{"gamma":".5"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"lightness":"60"},{"saturation":"0"},{"color":"#efc337"},{"visibility":"simplified"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efc337"},{"saturation":"0"},{"lightness":"12"},{"gamma":"1.00"}]},{"featureType":"landscape.natural","elementType":"labels.text","stylers":[{"lightness":"100"}]},{"featureType":"landscape.natural","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#efc337"},{"saturation":"0"},{"lightness":"-7"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"all","stylers":[{"gamma":"6.14"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#efc337"},{"saturation":"0"},{"lightness":"-18"},{"gamma":"1.00"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"saturation":"0"},{"lightness":"100"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"},{"invert_lightness":true}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#ffc200"},{"saturation":"100"},{"gamma":"0.85"},{"lightness":"17"},{"weight":"1.00"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"hue":"#ffc200"},{"saturation":"-100"},{"gamma":"0.5"},{"weight":"1.00"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"lightness":"80"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#efc337"},{"saturation":"0"},{"lightness":"35"},{"gamma":"1.00"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]}];

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