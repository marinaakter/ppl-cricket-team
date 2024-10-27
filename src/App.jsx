import './App.css'
import Banner from './components/banner/banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {

  return (
    <>
      <div className='container mx-auto mt-5'>
      <Header></Header>
      <Banner></Banner>
      <Main ></Main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
