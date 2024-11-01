import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";

const ShowSelectedPlayers = ({ selectedPlayers, handleRemovePlayer }) => {
  return (
    <div className="mt-5">
      <h2 className="text-lg font-bold mb-3">Selected Players ({selectedPlayers.length})</h2>
      <div className="grid grid-cols-1 gap-4">
        {selectedPlayers.map(player => (
          <div key={player.id} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <img 
              src={player.image} 
              alt={player.name} 
              className="w-16 h-16 rounded-full  mr-4" 
            />
            <div className="flex-1">
              <h3 className="font-semibold text-md">{player.name}</h3>
              <p className="text-sm text-gray-600">{player.battingType}</p>
            </div>
            <button 
              onClick={() => handleRemovePlayer(player.id)} 
              className="text-red-500"
            >
              <FaTrash size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

ShowSelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleRemovePlayer: PropTypes.func.isRequired,
};

export default ShowSelectedPlayers;
