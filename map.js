// Initialize and add the map
function initMap() {
    // The location of Uluru
    const restaurant = { lat: -13.043595750010423, lng: -74.1447689749426 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: restaurant,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: restaurant,
      map: map,
    });
  }