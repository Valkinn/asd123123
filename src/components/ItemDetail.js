const ItemDetail = ({item}) => {
  return (
    
    (
      <div className="card w-60 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
              <img src={item.img} alt="Cargando.." className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <div className="card-actions">
                <button className="btn">Añadir al carrito</button>
              </div>
          </div>
      </div>
    )
  )
}
export default ItemDetail



/*
const ItemDetail = ({item}) => {
  return (
    <div>
        <li>{item.name}</li>
        <img src={item.img} alt="Shoes" className="rounded-xl" />
    </div>
  )
}
export default ItemDetail


*/