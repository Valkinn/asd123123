import { CartProvider } from "../context/CartContext"
import { ItemListContainer } from "./ItemListContainer"

function Productos (){
    return (
    <div>
        <CartProvider>
<ItemListContainer/>
</CartProvider>
</div>
      )
    
}
export default Productos