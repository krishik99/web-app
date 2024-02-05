import React,{ useState } from 'react'
import './App.css'
import Layouts from './Layouts/Layouts'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom' 
import UserForm from './pages/UserForm'
import Home from './pages/Home'
import { useAppContext } from './contexts/AppContext'
import MyHotels from './pages/MyHotels'
function App() {
  const [count, setCount] = useState(0)
  const {isLoggedIn} = useAppContext();
  console.log(isLoggedIn)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layouts>
          <Home />
        </Layouts>} />
        <Route path='/search' element={<Layouts><p>Search page</p></Layouts>} />
        {
          isLoggedIn && <Route path='/my-hotels' element={<Layouts><MyHotels /></Layouts>} />
        }
        <Route path='/signUp' element={<Layouts><UserForm /></Layouts>} />
        <Route path='/signIn' element={<Layouts><UserForm /></Layouts>} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
