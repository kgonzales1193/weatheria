import Card from "../cards/Card";
import CardStatus from "../cards/CardStatus";
import HumidityCard from "../cards/HumidityCard";
import InfoCard from "../cards/InfoCard";
import PropTypes from "prop-types";

const RightAside = ({ forecast, windSpeed, windDirection }) => {
  return (
    <>
      <div className='flex-col justify-center items-center'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-2'>
          {forecast.map((item) => (
            <Card
              key={String(item.timestamp)}
              date={String(item.timestamp)}
              iconUrl={item.iconUrl}
              minTemperature={item.minTemperature}
              maxTemperature={item.maxTemperature}
            />
          ))}
        </div>
        {/* Highlights */}
        <div className='flex justify-start items-center mt-6 ml-4'>
          <p className='text-4xl font-bold'>Today&apos;s Highlights</p>
        </div>
        {/* Highlights Card */}
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 m-2'>
          <CardStatus windSpeed={windSpeed} windDirection={windDirection} />
          <HumidityCard />
          <InfoCard title='Visibility' />
          <InfoCard title='Air Pressure' />
        </div>
      </div>
    </>
  );
};

RightAside.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      iconUrl: PropTypes.string.isRequired,
      minTemperature: PropTypes.number.isRequired,
      maxTemperature: PropTypes.number.isRequired,
    })
  ).isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
};

export default RightAside;
