import React, {useState} from 'react'

const Cart = () => {
    const [cart, setCart] = useState([])

    function delOutOfCart(id) {
        
    }
    const result = cart.map(function(prod){
        return <div key={prod.id} style={{display: 'flex'}}>
        <p>название: {prod.name}| цена: {prod.cost}| описание: {prod.description}</p> <button onClick={delOutOfCart}>Удалить из корзины</button>
    </div>
    }) 
  return (
    <div>
        <h2>Корзина товаров:</h2>
      {result}
    </div>
  )
}

export default Cart
