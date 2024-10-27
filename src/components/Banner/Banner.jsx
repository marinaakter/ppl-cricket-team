import bgImage from '/assets/bg-shadow.png';

console.log(bgImage); // Check if this logs the correct URL

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat rounded-3xl h-auto mb-10"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
      }}
    >
      <div className='w=9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4'>
      <img className='' src="/assets/banner-main.png" alt="" />
        <h1 className='font-bold text-white md:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p>Beyond Boundaries Beyond Limits</p>
        <button className="btn bg-bannerBtn">Claim Free Credit</button>

      </div>
    </div>
  );
}

export default Banner;
