import React from "react";
import { Link } from "react-router-dom";
import ButtonCount from "./ButtonCount";
import ItemCount from "./ItemCount";



export const Producto = ({ id, name, price, img }) => {


  return (
    
    (
      <div className="card w-60 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
              <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{id}</p>
              <p>${price}</p>
              <div className="card-actions">
              <Link className="btn" aria-current="page" to={'/ItemDetailContainer/item/'+id}>Comprar</Link>
              </div>
          </div>
      </div>
    )
  );
};
