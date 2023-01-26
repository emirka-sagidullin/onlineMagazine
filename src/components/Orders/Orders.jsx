import React, {useState} from 'react'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const result = orders.map(function(order){
        return <div key={order.id} style={{display: 'flex'}}>
        <p>название: {order.name}| цена: {order.cost}| описание: {order.description}</p>
    </div>
    }) 
  return (
    <div>
        <h2>Оформленные заказы:</h2>
      {result}
    </div>
  )
}

export default Orders
