import PropTypes from 'prop-types';
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa6";
const Player = ({player}) => {
    const {name,image,country,role, battingType, biddingPrice} = player
    
  return (
    <div className="card bg-base-100 shadow-xl border">
    <figure className="px-10 pt-10">
        <img
        src={image}
        alt=""
        className="rounded-xl" />
    </figure>
    <div className="card-body">
        <div className='flex items-center gap-2'>
            <CgProfile className='text-2xl'/>
            <h2 className="card-title">{name}</h2>      
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <FaFlag />
                <small>{country}</small>
            </div>
            <div>
                <button className='btn'>{role}</button>
            </div>
            
        </div>
        <hr />
        <p className='font-bold'>Ratings</p>
        <p> Batting-Type: {battingType}</p>
        <div className="card-actions flex items-center my-3">
        <p>Price: ${biddingPrice} </p>
        <button className="btn">Choose Player</button>
        </div>
    </div>
    </div>
  )
}

Player.propTypes = {
    player: PropTypes.shape({
        name:PropTypes.string.isRequired ,
        image: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        battingType: PropTypes.string.isRequired,
        bowlingType: PropTypes.string.isRequired,
        biddingPrice: PropTypes.string.isRequired,
    })
  };
  

export default Player
