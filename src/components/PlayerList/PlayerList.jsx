import { useEffect, useState } from "react"
import Player from "../Player/Player"
const PlayerList = () => {
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
                <div>Selected</div>
            </div>
        
        
        </div>
        <div className="grid grid-cols-3 gap-3">
        {
            playerList.map(player => <Player
            key={player.id}
            player={player}
            ></Player>)
                }
        </div>
    </div>
    
    
    
  )
}

export default PlayerList
