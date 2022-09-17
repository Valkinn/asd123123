import React from "react";
import { Producto } from "./Item";

export const ItemList = ({ items }) => {
  const flex = { display: "flex", justifyContent: "space-evenly" };
  return (
   
    <section style={flex}>
      {items.length ? (
        items.map((item) => <Producto key={item.id} {...item} />)
      ) : (
        <h2>Cargando...</h2>
      )}
    </section>
  );
};
