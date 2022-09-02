
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {


  return (
  <div className='container'> 

  <NavBar className='nav'></NavBar>
  

<ItemCount></ItemCount>

<ItemListContainer/>


</div>


  );
}

export default App;
