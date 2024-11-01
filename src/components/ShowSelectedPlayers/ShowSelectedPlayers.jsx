import PropTypes from 'prop-types';
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa6";

const ShowSelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {selectedPlayers.map(player => (
        <div key={player.id} className="card bg-base-100 shadow-xl border">
          <figure className="px-10 pt-10">
            <img
              src={player.image}
              alt={player.name}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <div className='flex items-center gap-2'>
              <CgProfile className='text-2xl' />
              <h2 className="card-title">{player.name}</h2>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <FaFlag />
                <small>{player.country}</small>
              </div>
              <div>
                <button className='btn'>{player.role}</button>
              </div>
            </div>
            <hr />
            <p className='font-bold'>Ratings</p>
            <p>Batting-Type: {player.battingType}</p>
            <div className="card-actions flex items-center my-3">
              <p>Price: ${player.biddingPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ShowSelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
};

export default ShowSelectedPlayers;
