import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import PokedexPage from './pages/PokedexPage'
import PokeDetailPage from './pages/PokeDetailPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
   
 
  return (
    <div>
     
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route element={<ProtectedRoutes/>}>
              <Route path='/pokedex' element={<PokedexPage/>}/>
             <Route path='/pokedex/:name' element={<PokeDetailPage/>}/>
         </Route>
      </Routes>
    </div>
  )
}

export default App
