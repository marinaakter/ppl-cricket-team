import { useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PlayerList from './components/PlayerList/PlayerList'

function App() {
  const [freeCredit, setFreeCredit] = useState(0);

  const [selectedPlayers, setSelectedPlayers] = useState([])


  const handleFreeCredit = () => {
      setFreeCredit(freeCredit + 6000000);
  };

  const handleSelectedPlayer =(myPlayer) =>{
    console.log(player);
    
  }


  return (
    <>
      <div className='container mx-auto mt-5'>
        <Header freeCredit={freeCredit}></Header>
        <Banner handleFreeCredit={handleFreeCredit}></Banner>
        <PlayerList></PlayerList>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
