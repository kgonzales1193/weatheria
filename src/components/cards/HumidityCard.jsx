const HumidityCard = () => {
  return (
    <div className='bg-white/10 rounded-xl px-auto py-8'>
      <div className='flex-col'>
        <p className='text-center'>Humidity</p>
        <div className='flex justify-center items-center mt-5'>
          {/* Progress Bar */}
          <div className='flex justify-center items-center mt-1'>
            <div
              className='radial-progress'
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "1rem",
              }}>
              <span className='text-5xl font-bold'>
                70<sub className='font-lighter ml-1'>%</sub>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HumidityCard;
