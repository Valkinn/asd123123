import React from "react";
import { useState, useEffect } from "react";
import { useItems } from "../context/CartContext";
import productosJson from "../productosJson.json";

import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  const {Buy, clearItems} = useItems()


  useEffect(() => {
    const getItems = (data, time) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("Error");
          }
        }, time);
      });

    getItems(productosJson, 3000)
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err, "no hay stock"));
  }, []);

  return (
    <div>
     <strong>Carrito:</strong>{Buy}
     <button onClick={clearItems} className="btn">Borrar carrito</button>
      <ItemList items={items} />
    </div>
  );
};
