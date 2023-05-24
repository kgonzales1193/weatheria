import axios from "axios";

const API_KEY = "2f9fc822b844ad1ef5c4a9a647678d02";

export const fetchCurrentWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    const data = response.data;

    if (data.weather && data.weather.length > 0) {
      data.weather[0].iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }

    // Extract wind speed and direction
    const windSpeed = data.wind.speed;
    const windDirection = data.wind.deg.toString(); // Convert wind direction to string

    return { ...data, windSpeed, windDirection };
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const fetchHourlyWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
    );
    const data = response.data;
    const hourlyData = data.list.map((item) => ({
      timestamp: item.dt,
      temperature: item.main.temp,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    }));
    const filteredData = hourlyData.filter((item, index) => index % 8 === 0);
    const hourlyWeather = filteredData.map((item) => ({
      ...item,
      iconUrl: `https://openweathermap.org/img/wn/${item.icon}.png`,
    }));
    return hourlyWeather;
  } catch (error) {
    console.error("Error fetching hourly weather:", error);
    throw error;
  }
};

export const fetch5DayForecast = async (location) => {
  const convertUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
    );
    const data = response.data;
    const dailyData = data.list.map((item) => ({
      timestamp: convertUnixTimestamp(item.dt), // Convert UNIX timestamp to date string
      minTemperature: item.main.temp_min, // Add minTemperature
      maxTemperature: item.main.temp_max, // Add maxTemperature
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    }));
    const filteredData = dailyData.filter((item, index) => index % 8 === 0);
    const forecast = filteredData.map((item) => ({
      ...item,
      iconUrl: `https://openweathermap.org/img/wn/${item.icon}.png`,
    }));
    return forecast;
  } catch (error) {
    console.error("Error fetching 5-day forecast:", error);
    throw error;
  }
};
