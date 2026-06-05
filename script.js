const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});



const productsLink = document.getElementById("products-link");

productsLink.addEventListener("click", function(event) {

    event.preventDefault();

    window.location.href = "products.html";

});




const productsBtn = document.getElementById("products-btn");

productsBtn.addEventListener("click", function() {
    window.location.href = "products.html";
});



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