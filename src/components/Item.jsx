import React from "react";



export const Producto = ({ id, name, price }) => {


  return (
    <article>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </article>
  );
};
