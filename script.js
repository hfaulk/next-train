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

document.querySelector("#locate").addEventListener("click", setStation);

function setStation() {
  const stat_name = document.querySelector("#stat_name");
  const stat_code = document.querySelector("#stat_code");

  const from = document.querySelector("#from");
  const to = document.querySelector("#to");

  const op_name = document.querySelector("#op_name");

  if (stat_name.textContent == "Portsmouth Harbour") {
    stat_name.textContent = "Rhoose Cardiff International Airport";
    stat_code.textContent = "RIA";

    from.textContent = "RIA";
    to.textContent = "CDF";

    op_name.textContent = "Transport for Wales";
  } else {
    stat_name.textContent = "Portsmouth Harbour";
    stat_code.textContent = "PMH";

    from.textContent = "PMH";
    to.textContent = "WAT";

    op_name.textContent = "South Western Railway";
  }
}
