function updateClock() {
  const now = new Date();

  // Convert to 12-hour format
  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12

  // Update time
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(
    now.getMinutes()
  ).padStart(2, "0");
  document.getElementById("seconds").textContent = String(
    now.getSeconds()
  ).padStart(2, "0");
  document.getElementById("ampm").textContent = ampm;

  // Update date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-US",
    options
  );
}

async function getWeather(position) {
  const { latitude, longitude } = position.coords;
  const apiKey = "ba583690a7814b42955190311250408";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("temperature").textContent = `${Math.round(
      data.current.temp_c
    )}°C`;
    document.getElementById("weather-desc").textContent =
      data.current.condition.text;
    document.getElementById("weather-icon").textContent = getWeatherIcon(
      data.current.condition.code
    );
    document.getElementById("location").textContent = data.location.name;
    console.log(data.location);
    document.getElementById("feels-like").textContent = `${Math.round(
      data.current.feelslike_c
    )}°C`;
    document.getElementById("wind-speed").textContent = `${Math.round(
      data.current.wind_kph
    )} km/h`;
    document.getElementById(
      "humidity"
    ).textContent = `${data.current.humidity}%`;
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weather-desc").textContent = "Weather unavailable";
    document.getElementById("location").textContent = "--";
    document.getElementById("feels-like").textContent = "--°C";
    document.getElementById("wind-speed").textContent = "-- km/h";
    document.getElementById("humidity").textContent = "--%";
  }
}

function getWeatherIcon(code) {
  const icons = {
    1000: "☀️", // Sunny/Clear
    1003: "⛅", // Partly cloudy
    1006: "☁️", // Cloudy
    1009: "☁️", // Overcast
    1030: "🌫️", // Mist
    1063: "🌦️", // Patchy rain
    1066: "🌨️", // Patchy snow
    1069: "🌧️", // Patchy sleet
    1072: "🌧️", // Patchy freezing drizzle
    1087: "⛈️", // Thundery outbreaks
    1114: "❄️", // Blowing snow
    1117: "❄️", // Blizzard
    1135: "🌫️", // Fog
    1147: "🌫️", // Freezing fog
    1150: "🌧️", // Patchy light drizzle
    1153: "🌧️", // Light drizzle
    1168: "🌧️", // Freezing drizzle
    1171: "🌧️", // Heavy freezing drizzle
    1180: "🌧️", // Patchy light rain
    1183: "🌧️", // Light rain
    1186: "🌧️", // Moderate rain
    1189: "🌧️", // Moderate rain
    1192: "🌧️", // Heavy rain
    1195: "🌧️", // Heavy rain
    1198: "🌧️", // Light freezing rain
    1201: "🌧️", // Moderate/heavy freezing rain
    1204: "🌨️", // Light sleet
    1207: "🌨️", // Moderate/heavy sleet
    1210: "🌨️", // Patchy light snow
    1213: "❄️", // Light snow
    1216: "❄️", // Patchy moderate snow
    1219: "❄️", // Moderate snow
    1222: "❄️", // Patchy heavy snow
    1225: "❄️", // Heavy snow
    1237: "🌨️", // Ice pellets
    1240: "🌧️", // Light rain shower
    1243: "🌧️", // Moderate/heavy rain shower
    1246: "🌧️", // Torrential rain shower
    1249: "🌨️", // Light sleet showers
    1252: "🌨️", // Moderate/heavy sleet showers
    1255: "🌨️", // Light snow showers
    1258: "❄️", // Moderate/heavy snow showers
    1261: "🌨️", // Light showers of ice pellets
    1264: "🌨️", // Moderate/heavy showers of ice pellets
    1273: "⛈️", // Patchy light rain with thunder
    1276: "⛈️", // Moderate/heavy rain with thunder
    1279: "⛈️", // Patchy light snow with thunder
    1282: "⛈️", // Moderate/heavy snow with thunder
  };
  return icons[code] || "⟳";
}

function handleLocationError(error) {
  console.error("Error getting location:", error);
  document.getElementById("weather-desc").textContent =
    "Location access denied";
}

// Request location permission and get weather
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getWeather, handleLocationError);
} else {
  document.getElementById("weather-desc").textContent =
    "Geolocation not supported";
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);

// Update weather every 5 minutes
setInterval(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather, handleLocationError);
  }
}, 300000);
