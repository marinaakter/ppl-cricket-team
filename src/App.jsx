import './App.css'
import Banner from './components/banner/banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <Main ></Main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
