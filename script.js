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

  const cd_timer = document.querySelector("#cd_timer");

  if (stat_name.textContent == "Portsmouth Harbour") {
    stat_name.textContent = "Rhoose Cardiff International Airport";
    stat_code.textContent = "RIA";

    from.textContent = "RIA";
    to.textContent = "CDF";

    cd_timer.textContent = "00:03:24";

    op_name.textContent = "Transport for Wales";
  } else {
    stat_name.textContent = "Portsmouth Harbour";
    stat_code.textContent = "PMH";

    from.textContent = "PMH";
    to.textContent = "WAT";

    op_name.textContent = "South Western Railway";

    cd_timer.textContent = "01:23:45";
  }
}

class Countdown {
  constructor(end_time_string, display, on_end) {
    this.end_time = this.string_to_time(end_time_string);
    this.display = display;
    this.on_end = on_end;

    const tr = this.time_remaining();

    this.hours = Math.floor(tr / (1000 * 60 * 60));
    this.minutes = Math.ceil(tr / 60000);
    this.seconds = Math.floor((tr / 1000) % 60);
  }

  string_to_time(time_string) {
    const [hours, minutes] = time_string.split(":");
    const date = new Date(); // New date object with current date & time
    date.setHours(parseInt(hours), parseInt(minutes), 0, 0); // Replace hours & mins with parsed info
    return date;
  }

  time_remaining() {
    const currentTime = new Date().getTime();
    return this.end_time.getTime() - currentTime;
  }
}

const cd = new Countdown("16:55", "", "");
console.log(cd.hours, cd.minutes, cd.seconds);
