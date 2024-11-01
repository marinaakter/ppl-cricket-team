import { useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PlayerList from './components/PlayerList/PlayerList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const [freeCredit, setFreeCredit] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [showSelectedPlayers, setShowSelectedPlayers] = useState(false);


  const handleFreeCredit = () => {
      setFreeCredit(freeCredit + 6000000);
  };

  const handleSelectedPlayer =(myPlayer) =>{
    const isExist = selectedPlayers.find((p)=>p.id===myPlayer.id)
    if (isExist){
      toast.error(`${myPlayer.name} is already Exists.`);
    } 
    else{
      const newPlayers=[...selectedPlayers, myPlayer]
      setSelectedPlayers(newPlayers);
      toast.success(`${myPlayer.name} has been added`);
    }
  }

  const handleRemovePlayer = (id) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== id));
    toast.info("Remove this Player");
  };
  
  return (
    <>
      <div className='container mx-auto mt-5'>
        <Header freeCredit={freeCredit}></Header>
        <Banner handleFreeCredit={handleFreeCredit}></Banner>
        <PlayerList 
        selectedPlayers={selectedPlayers} 
        handleSelectedPlayer={handleSelectedPlayer}
        showSelectedPlayers={showSelectedPlayers}
        setShowSelectedPlayers={setShowSelectedPlayers}
        handleRemovePlayer={handleRemovePlayer}
        ></PlayerList>
      </div>
      <Footer></Footer>
      <ToastContainer /> 
    </>
  )
}

export default App
