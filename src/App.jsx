import { BrowserRouter as Router, Routes , Route, Navigate } from 'react-router-dom'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import PokemonDetail from './components/PokemonDetail.jsx'

const App = () => {

  return (
      <Router>
          <Header/>
          <Routes >
            <Route path="/home/:numpage?" element={<Home />}/>
            <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
            <Route path="*" element={<Navigate to="/home/" />}/>
          </Routes >
      </Router>
  )
}

export default App

