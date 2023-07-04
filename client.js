function initMap() {
  // Check if the browser supports geolocation
  if (navigator.geolocation) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // Retrieve the latitude and longitude
        const { latitude, longitude } = position.coords;

        // Create a map object and specify the DOM element for display
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: latitude, lng: longitude }, // Use the current location as the center of the map
          zoom: 17, // Set the zoom level for a street-level view
        });

        // Add a marker for the current location with a custom color
        new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: "Your Location",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // URL to a red marker icon
          },
        });
      },
      function () {
        // Handle location retrieval errors
        alert("Error: The Geolocation service failed.");
      }
    );
  } else {
    // Browser doesn't support geolocation
    alert("Error: Your browser doesn't support geolocation.");
  }
}

initMap();
