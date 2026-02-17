// function updateLocation(position) {
//   const { latitude, longitude } = position.coords;

//   const long = document.querySelector("#long");
//   const lat = document.querySelector("#lat");

//   long.textContent = `Longitude: ${longitude}`;
//   lat.textContent = `Latitude: ${latitude}`;
// }

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(updateLocation, (err) =>
//     console.error("location error:", err),
//   );
// } else {
//   console.error("geolocation not supported");
// }

function setStation() {
  const stat_name = document.querySelector("#stat_name");
  const stat_code = document.querySelector("#stat_code");

  if (stat_name.textContent == "Portsmouth Harbour") {
    stat_name.textContent = "Rhoose Cardiff International Airport";
    stat_code.textContent = "RIA";
  } else {
    stat_name.textContent = "Portsmouth Harbour";
    stat_code.textContent = "PMH";
  }
}
