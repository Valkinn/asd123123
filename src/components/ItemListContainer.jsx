import React from "react";
import { useState, useEffect } from "react";
import productosJson from "../productosJson.json";

import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

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
      <ItemList items={items} />
    </div>
  );
};
