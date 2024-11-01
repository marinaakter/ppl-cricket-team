import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import ShowSelectedPlayers from '../ShowSelectedPlayers/ShowSelectedPlayers';

const PlayerList = ({ selectedPlayers, handleSelectedPlayer, showSelectedPlayers, setShowSelectedPlayers }) => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayerList(data));
  }, []);
  const toggleShowSelected = () => {
    setShowSelectedPlayers(true); // Set to true to show selected players
  };

  const toggleShowAvailable = () => {
    setShowSelectedPlayers(false); // Set to false to show available players
  };

  return (
    <div>
      <div className="flex justify-between px-5 mb-5">
        <div>Available Players: {playerList.length}</div>
        <div className="flex gap-5">
          <div onClick={toggleShowAvailable} 
            className={`btn ${!showSelectedPlayers ? 'bg-lime-400' : ''}`}>Available</div>
          <div onClick={toggleShowSelected} 
            className={`btn ${showSelectedPlayers ? 'bg-lime-400' : ''}`}>
            Selected {selectedPlayers.length}
          </div>
        </div>
      </div>
      {showSelectedPlayers ? (
        <ShowSelectedPlayers selectedPlayers={selectedPlayers} />
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {playerList.map(player => (
            <Player
              key={player.id}
              player={player}
              handleSelectedPlayer={handleSelectedPlayer}
              selectedPlayers={selectedPlayers}
            />
          ))}
        </div>
      )}
    </div>
  );
};

PlayerList.propTypes = {
  handleSelectedPlayer: PropTypes.func,
  selectedPlayers: PropTypes.array,
  showSelectedPlayers: PropTypes.bool, 
  setShowSelectedPlayers: PropTypes.func,
};

export default PlayerList;
