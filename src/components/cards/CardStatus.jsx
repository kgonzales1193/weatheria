import { FiNavigation2 } from "react-icons/fi";
import PropTypes from "prop-types";

const CardStatus = ({ windSpeed, windDirection }) => {
  return (
    <div className='rounded-xl px-auto py-8 bg-white/10'>
      <div className='flex-col'>
        <p className='text-center text-xl font-semibold mb-1'>Wind Status</p>
        <div className='flex justify-center items-center mt-5'>
          <span className='text-5xl font-bold'>
            {windSpeed}
            <sub className='font-lighter ml-1'>mph</sub>
          </span>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <FiNavigation2 className='text-2xl' />
          <span>{windDirection}</span>
        </div>
      </div>
    </div>
  );
};

CardStatus.propTypes = {
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
};

export default CardStatus;
