# Digital Clock with Weather 🕐🌤️

A beautiful, responsive digital clock application that displays real-time weather information alongside the current time. Built with modern web technologies and featuring a stunning gradient background with glassmorphism design.

## ✨ Features

### 🕐 Digital Clock
- **Real-time display** with hours, minutes, and seconds
- **12-hour format** with AM/PM indicator
- **Current date** display with full weekday, month, and year
- **Smooth animations** with pulsing effects
- **Responsive design** that adapts to all screen sizes

### 🌤️ Weather Information
- **Current weather conditions** with temperature in Celsius
- **Location-based weather** using GPS coordinates
- **Weather icons** representing current conditions
- **Comprehensive weather data** including:
  - Temperature and "feels like" temperature
  - Wind speed and direction
  - Humidity percentage
  - Heat index
  - And much more in the detailed modal

### 📱 Advanced Weather Details Modal
- **Atmospheric pressure** (hPa)
- **Visibility** (km)
- **UV Index**
- **Cloud coverage** percentage
- **Wind direction** and degree
- **Wind chill** and gust speed
- **Precipitation** amount
- **Dew point**
- **Last updated** timestamp

### 🎨 Design Features
- **Modern glassmorphism** design with backdrop blur effects
- **Gradient background** (purple to blue to black)
- **Responsive layout** that works on desktop, tablet, and mobile
- **Smooth animations** and transitions
- **Mobile-optimized** with dedicated location button for small screens

## 🚀 Getting Started

### Prerequisites
- A modern web browser with JavaScript enabled
- Internet connection for weather data
- Location services enabled (optional but recommended)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Allow location access when prompted for weather data

### File Structure
```
Digital Clock with Weather Project/
├── index.html          # Main HTML file with structure and styling
├── script.js           # JavaScript functionality for clock and weather
└── README.md          # Project documentation
```

## 🔧 How It Works

### Clock Functionality
- Updates every second using `setInterval()`
- Formats time in 12-hour format with leading zeros
- Displays current date in a readable format

### Weather Integration
- Uses **WeatherAPI** for real-time weather data
- Automatically detects user location via browser geolocation
- Caches last known location in localStorage
- Updates weather data every 5 minutes
- Handles errors gracefully with fallback messages

### Responsive Design
- Built with **Tailwind CSS** for rapid styling
- Flexbox layout for perfect centering
- Mobile-first approach with responsive breakpoints
- Touch-friendly interface elements

## 🌐 API Integration

This project uses the [WeatherAPI](https://www.weatherapi.com/) service to fetch real-time weather data. The API provides:
- Current weather conditions
- Detailed atmospheric data
- Weather icons and descriptions
- Location information

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Usage

1. **Initial Load**: The application will request location permission
2. **Clock Display**: Time updates automatically every second
3. **Weather Data**: Updates every 5 minutes or when location changes
4. **Mobile Users**: Use the "Enable Location" button in the top-right corner
5. **Detailed Weather**: Click "More Weather Details" for comprehensive information

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Custom animations and responsive design
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **WeatherAPI** - Real-time weather data
- **Geolocation API** - Browser location services
- **LocalStorage** - Caching user preferences

## 🎨 Design Philosophy

The application follows modern web design principles:
- **Minimalism**: Clean, uncluttered interface
- **Accessibility**: High contrast and readable fonts
- **Performance**: Lightweight and fast loading
- **User Experience**: Intuitive navigation and feedback

## 🔮 Future Enhancements

Potential features for future versions:
- [ ] Weather forecast (5-day outlook)
- [ ] Multiple timezone support
- [ ] Customizable themes and colors
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Offline mode with cached data

## 👨‍💻 Developer

**Mohammad Hafizur Rahman Sakib**
- GitHub: [@Hafiz-Sakib](https://github.com/Hafiz-Sakib)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Icons and styling powered by [Tailwind CSS](https://tailwindcss.com/)
- Emoji icons for weather conditions

---

**Made with ❤️ by Mohammad Hafizur Rahman Sakib**

*Thanks for visiting!*