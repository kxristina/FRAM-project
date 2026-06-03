function initMap() {

    const farmLocation = {
        lat: 60.304,
        lng: 10.636
    };

    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 11,
            center: farmLocation,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
        }
    );

    new google.maps.Marker({
        position: farmLocation,
        map: map,
        title: "Braastad Gaard"
    });
}