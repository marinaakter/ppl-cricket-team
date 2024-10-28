import './App.css'
import Banner from './components/banner/banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PlayerList from './components/PlayerList/PlayerList'

function App() {

  return (
    <>
      <div className='container mx-auto mt-5'>
        <Header></Header>
        <Banner></Banner>
        <PlayerList></PlayerList>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
