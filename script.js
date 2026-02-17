function updateLocation(position) {
  const { latitude, longitude } = position.coords;

  const long = document.querySelector("#long");
  const lat = document.querySelector("#lat");

  long.textContent = `Longitude: ${longitude}`;
  lat.textContent = `Latitude: ${latitude}`;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(updateLocation, (err) =>
    console.error("location error:", err),
  );
} else {
  console.error("geolocation not supported");
}
