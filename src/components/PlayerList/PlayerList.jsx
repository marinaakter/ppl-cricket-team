import PropTypes from 'prop-types'
import { useEffect, useState } from "react"
import Player from "../Player/Player"
const PlayerList = ({selectedPlayers, handleSelectedPlayer}) => {
    const [playerList, setPlayerList] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPlayerList(data))
    },[])

  return (
    <div>
        <div className="flex justify-between px-5 mb-5">
            <div className="">Available Players: {playerList.length}</div>
            <div className="flex gap-5">
                <div>Available</div>
                <div>Selected {selectedPlayers.length}</div>
            </div>
        
        
        </div>
        <div className="grid grid-cols-3 gap-3">
        {
            playerList.map(player => <Player
            key={player.id}
            player={player}
            handleSelectedPlayer={handleSelectedPlayer}
            ></Player>)
                }
        </div>
    </div>
    
    
    
  )
}

PlayerList.propTypes={
    handleSelectedPlayer: PropTypes.func,
    selectedPlayers: PropTypes.array
}

export default PlayerList
