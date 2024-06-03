# Weather App

This is a simple weather application that fetches and displays current weather information for a specified location.

## Features

- Fetches current weather data from the Weatherstack API
- Displays temperature, humidity, and weather conditions
- Uses Mapbox API for location services
- User-friendly interface

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/elhamhsnpr/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and set your API keys:
   ```bash
   WEATHER_STACK_ACCESS_KEY=YOUR_WEATHERSTACK_API_KEY
   GEO_CODE_ACCESS_TOKEN=YOUR_MAPBOX_API_KEY
   ```
2. Run the application:
   ```bash
   npm run start
   ```
3. Open your browser and navigate to `http://localhost:3000`

## Dependencies

- **Node.js**: For the server environment
- **Express.js**: For setting up the server
- **Postman-request**: For making HTTP requests to fetch weather data
- **HBS**: For rendering dynamic HTML templates
- **Fetch**: For making HTTP requests
- **dotenv**: For managing environment variables
- **Path**: For handling file paths

---