// const Card = () => {
//   return (
//     <div className='p-6 rounded-xl bg-white/10'>
//       <div className='flex-col text-center'>
//         <p>2023-05-24</p>
//         <div className='flex-justify-center items-center'>
//           <img
//             src='https://openweathermap.org/img/wn/10d@2x.png'
//             alt=''
//             height='100px'
//             width='100px'
//           />
//         </div>
//       </div>
//       <div className='flex justify-between'>
//         <span>22&deg;c</span>
//         <span>22&deg;c</span>
//       </div>
//     </div>
//   );
// };
// export default Card;

import PropTypes from "prop-types";

const Card = ({ date, iconUrl, minTemperature, maxTemperature }) => {
  return (
    <div className='p-6 rounded-xl bg-white/10'>
      <div className='flex-col text-center'>
        <p>{String(date)}</p>
        <div className='flex justify-center items-center'>
          <img src={iconUrl} alt='Weather Icon' height='100px' width='100px' />
        </div>
      </div>
      <div className='flex justify-between'>
        <span>{minTemperature}&deg;C</span>
        <span>{maxTemperature}&deg;C</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  iconUrl: PropTypes.string.isRequired,
  minTemperature: PropTypes.number,
  maxTemperature: PropTypes.number,
};

export default Card;
