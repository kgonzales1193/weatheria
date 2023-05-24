import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { fetchCurrentWeather } from "../../api";

const LeftAside = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = async () => {
    if (searchLocation.trim() !== "") {
      try {
        const data = await fetchCurrentWeather(searchLocation);
        setWeatherData(data);
        setSearchLocation("");
      } catch (error) {
        console.error("Error fetching current weather:", error);
      }
    }
  };

  useEffect(() => {
    const location = "Davao"; // Set your desired location here
    const fetchData = async () => {
      try {
        const data = await fetchCurrentWeather(location);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching current weather:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {weatherData && (
        <div className='flex-col p-5 bg-white/10 rounded-3xl'>
          {/* Navbar */}
          <div className='flex justify-between'>
            <a className='btn btn-ghost normal-case text-xl'>Weatheria</a>
            {/* Search Box */}
            <div className='form-control'>
              <div className='input-group'>
                <input
                  type='text'
                  placeholder='Search…'
                  className='input input-bordered capitalize'
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button className='btn btn-square' onClick={handleSearch}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Image/Icons */}
          <div className='flex flex-col justify-start items-center h-full'>
            <img
              src={weatherData.weather[0].iconUrl}
              alt='Weather Icon'
              height='150px'
              width='150px'
            />
            {/* Current Temperature */}
            <p>
              <span className='text-5xl font-bold'>
                {Math.round(weatherData.main.temp)}
              </span>
              <span className='text-gray-400 text-2xl font-semibold'>
                &deg;C
              </span>
            </p>
            {/* Description */}
            <p className='text-gray-50 font-bold mt-10 text-3xl'>
              {weatherData.weather[0].description}
            </p>
            <p className='text-gray-50 font-bold mt-10 text-3xl'>Today</p>
            <div>
              <p className='text-gray-400 font-bold text-5xl mt-12 flex'>
                <IoLocationOutline />
                {weatherData.name}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className='flex-col mt-5 p-5 bg-white/10 rounded-3xl'></div>
    </div>
  );
};

export default LeftAside;
