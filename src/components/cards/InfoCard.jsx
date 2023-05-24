import PropTypes from "prop-types";

const InfoCard = ({ title }) => {
  return (
    <div className='rounded-xl px-auto py-4 bg-white/10'>
      <div className='flex-col text-center'>
        <p>{title}</p>
        <div className='flex justify-center items-center p-3'>
          <span className='text-5xl font-bold'>
            12
            <span>
              <sub className='ml-2'>miles</sub>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InfoCard;
