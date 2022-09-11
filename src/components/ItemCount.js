import { useEffect, useState } from "react"
import ButtonCount from "./ButtonCount"

function ItemCount(){
    const [counter, setCounter] = useState(0)

  useEffect( () => {}, [counter])



  const handleClick = () => {
    setCounter(counter + 1)
  }

  
return (
    

    <div className='my-3'>
    <strong>Contador:{counter}</strong>
    <button onClick={handleClick} className='btn'>Añadir al carrito</button>
    <ButtonCount onClick={handleClick}></ButtonCount>
  </div>
  
  
    );
}
export default ItemCount;