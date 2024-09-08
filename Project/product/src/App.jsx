import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './Component/Add'
import Home from './Component/Home'
import Nav from './Component/Nav'


function App() {
  
  

  return (
    <>
      
        <Nav/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />}/>

          
        </Routes>
        
        
      
      
      
    </>
  )
}

export default App