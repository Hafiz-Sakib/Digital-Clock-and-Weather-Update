function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(
    now.getMinutes()
  ).padStart(2, "0");
  document.getElementById("seconds").textContent = String(
    now.getSeconds()
  ).padStart(2, "0");
  document.getElementById("ampm").textContent = ampm;

  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
}

async function getWeather(position) {
  const { latitude, longitude } = position.coords;
  localStorage.setItem("lastLocation", JSON.stringify(position.coords));
  const apiKey = "ba583690a7814b42955190311250408";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // document.getElementById("location").textContent = data.location.name;
    const city = data.location.name;
    console.log("City:", city);

    const current = data.current;

    console.log(current);
    // Main box
    document.getElementById("temperature").textContent = `${Math.round(
      current.temp_c
    )}°C`;
    document.getElementById("weather-desc").textContent =
      current.condition.text;
    document.getElementById("weather-icon").textContent = getWeatherIcon(
      current.condition.code
    );
    document.getElementById("location").textContent = data.location.name;
    document.getElementById("feels-like").textContent = `${Math.round(
      current.feelslike_c
    )}°C`;
    document.getElementById("wind-speed").textContent = `${Math.round(
      current.wind_kph
    )} km/h`;
    document.getElementById("humidity").textContent = `${current.humidity}%`;
    document.getElementById(
      "heatindex"
    ).textContent = `${current.heatindex_c}°C`;

    // Modal
    document.getElementById(
      "pressure"
    ).textContent = `${current.pressure_mb} hPa`;
    document.getElementById("visibility").textContent = `${current.vis_km} km`;
    document.getElementById("uv").textContent = current.uv;
    document.getElementById("cloud").textContent = `${current.cloud}%`;
    document.getElementById("wind-dir").textContent = current.wind_dir;
    document.getElementById(
      "wind-degree"
    ).textContent = `${current.wind_degree}°`;
    document.getElementById(
      "windchill"
    ).textContent = `${current.windchill_c}°C`;
    document.getElementById("gust").textContent = `${current.gust_kph} km/h`;
    document.getElementById(
      "precipitation"
    ).textContent = `${current.precip_mm} mm`;
    document.getElementById(
      "dew-point"
    ).textContent = `${current.dewpoint_c}°C`;
    document.getElementById(
      "heat-index"
    ).textContent = `${current.heatindex_c}°C`;
    document.getElementById("last-updated").textContent = current.last_updated;
  } catch (error) {
    console.error("Error fetching weather:", error);
    setWeatherUnavailable();
  }
}

function setWeatherUnavailable() {
  document.getElementById("weather-desc").textContent = "Weather unavailable";
  document.getElementById("location").textContent = "--";
  document.getElementById("feels-like").textContent = "--°C";
  document.getElementById("wind-speed").textContent = "-- km/h";
  document.getElementById("humidity").textContent = "--%";
}

function getWeatherIcon(code) {
  const icons = {
    1000: "☀️",
    1003: "⛅",
    1006: "☁️",
    1009: "☁️",
    1030: "🌫️",
    1063: "🌦️",
    1066: "🌨️",
    1069: "🌧️",
    1072: "🌧️",
    1087: "⛈️",
    1114: "❄️",
    1117: "❄️",
    1135: "🌫️",
    1147: "🌫️",
    1150: "🌧️",
    1153: "🌧️",
    1168: "🌧️",
    1171: "🌧️",
    1180: "🌧️",
    1183: "🌧️",
    1186: "🌧️",
    1189: "🌧️",
    1192: "🌧️",
    1195: "🌧️",
    1198: "🌧️",
    1201: "🌧️",
    1204: "🌨️",
    1207: "🌨️",
    1210: "🌨️",
    1213: "❄️",
    1216: "❄️",
    1219: "❄️",
    1222: "❄️",
    1225: "❄️",
    1237: "🌨️",
    1240: "🌧️",
    1243: "🌧️",
    1246: "🌧️",
    1249: "🌨️",
    1252: "🌨️",
    1255: "🌨️",
    1258: "❄️",
    1261: "🌨️",
    1264: "🌨️",
    1273: "⛈️",
    1276: "⛈️",
    1279: "⛈️",
    1282: "⛈️",
  };
  return icons[code] || "⟳";
}

function handleLocationError(error) {
  console.error("Error getting location:", error);
  document.getElementById("weather-desc").textContent =
    "Location access denied";
}

function requestLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather, handleLocationError);
  } else {
    document.getElementById("weather-desc").textContent =
      "Geolocation not supported";
  }
}

function openModal() {
  document.getElementById("weather-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("weather-modal").classList.add("hidden");
}

// Init
updateClock();
setInterval(updateClock, 1000);

const cached = localStorage.getItem("lastLocation");
if (cached) getWeather({ coords: JSON.parse(cached) });
else requestLocation();

setInterval(() => {
  const coords = localStorage.getItem("lastLocation");
  if (coords) getWeather({ coords: JSON.parse(coords) });
  else requestLocation();
}, 30);
