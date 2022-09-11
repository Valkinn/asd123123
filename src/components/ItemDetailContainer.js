import ItemDetail from "./ItemDetail"
import Products from "./productosInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams ()

    useEffect(() => {

        getItem().then( data => {
            //console.log(data);
            setItem(data)
        })
    })
   
   
   
   
    const getItem = () => {
        return new Promise(resolve => {
            setTimeout(() => {

                resolve(Products.find( p => p.id == id) )
            }, 2000);
        })
     }
  return (
    <ItemDetail item={item}/>
  )
}
export default ItemDetailContainer