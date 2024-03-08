import {Login} from  './components/Login/Login';
import './App.css'
import Home from './components/Home/Home';
import { useState} from 'react';
import Category from "./components/Category/Category";

function App() {
  const [user, setUser] = useState([])
  const [categoria, categoriaSeleccionada] = useState([])
  const [title, setTitle] = useState([])
  const [descripcion, description] = useState([])
  return (
    <div className="App"> 
      {
        !user.length >0
        ? <Login setUser = {setUser}/>
        :<Home user={user} setUser={setUser}/>
      }
       <Category categoria={categoriaSeleccionada} title={title} description={description}/>
    </div>
  )
}

export default App;
