//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {

  return (
    <div className='container'> 

  <NavBar className='nav'></NavBar>

 <ItemListContainer className='Productos'></ItemListContainer>

  
</div>


  );
}

export default App;
