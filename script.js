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





async function getFarmData() {
    const response = await fetch("/data/farm.json");

    if (!response.ok) {
        throw new Error("Could not load farm data");
    }

    return response.json();
}

async function initMap() {
    try {

        const farm = await getFarmData();

        const farmLocation = {
            lat: farm.lat,
            lng: farm.lng
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
            title: farm.name
        });

    } catch (error) {
        console.error(error);
    }
}




