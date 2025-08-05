// Function to get location info
function getLocationInfo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Using reverse geocoding to get city and location details
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("City:", data.city);
            console.log("State:", data.principalSubdivision);
            console.log("Country:", data.countryName);
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
          })
          .catch((error) => {
            console.error("Error getting location details:", error);
          });
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser");
  }
}

// Call the function
getLocationInfo();
