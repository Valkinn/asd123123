import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './components/Productos';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import Nosotros from './components/Nosotros';




function App() {


  return (
  <div className='container'>
  


  



<BrowserRouter>
<NavBar className='nav'/>



  <Routes>
  <Route path='/Nosotros' element={<Nosotros/>}/>
  <Route path='/Home' element={<Home/>}/>
   <Route path='/Productos' element={<Productos/>}/>
   <Route path='/ItemDetailContainer/item/:id' element={<ItemDetailContainer/>}/>
  </Routes>

</BrowserRouter>





</div>


  );
}

export default App;
