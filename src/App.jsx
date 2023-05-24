import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import LeftAside from "./components/LeftAside/LeftAside";
import RightAside from "./components/rightaside/RightAside";
import { fetch5DayForecast, fetchCurrentWeather } from "./api";

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirection, setWindDirection] = useState("");

  useEffect(() => {
    const location = "Davao"; // Set your desired location here

    const fetchData = async () => {
      try {
        const data = await fetch5DayForecast(location);
        setForecast(data);

        const currentWeatherData = await fetchCurrentWeather(location);
        setWindSpeed(currentWeatherData.windSpeed);
        setWindDirection(currentWeatherData.windDirection);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10 gap-2'>
        <aside className='col-span-1 lg:col-span-2 h-full rounded-md'>
          <LeftAside />
        </aside>
        <aside className='col-span-1 lg:col-span-4 h-full'>
          <RightAside
            forecast={forecast}
            windSpeed={windSpeed}
            windDirection={windDirection}
          />
        </aside>
      </div>
    </Layout>
  );
};

export default App;
