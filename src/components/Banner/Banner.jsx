import PropTypes from 'prop-types';
import bgImage from '/assets/bg-shadow.png';

console.log(bgImage); // Check if this logs the correct URL

const Banner = ({ handleFreeCredit }) => {
  return (
    <div
      className="bg-cover bg-no-repeat rounded-3xl h-auto mb-10"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 228, 0.1), black, rgba(0, 0, 0, 0.3)), url(${bgImage})`,
      }}
    >
      <div className='w=9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4'>
      <img className='' src="/assets/banner-main.png" alt="" />
        <h1 className='font-bold text-white md:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-white'>Beyond Boundaries Beyond Limits</p>
        <button onClick={handleFreeCredit} className="btn border-none bg-lime-400 text-black font-bold px-6 py-3 rounded-lg shadow-lg">
      Claim Free Credit
    </button>

      </div>
    </div>
  );
}

Banner.propTypes = {
  handleFreeCredit: PropTypes.func
  
};


export default Banner;
