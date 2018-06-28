function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat: 52.16243204,
            lng: 4.48588374
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.16243204, lng: 4.48588374 },
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}