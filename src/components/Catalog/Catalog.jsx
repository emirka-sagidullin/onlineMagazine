import React, {useState} from 'react'

const Catalog = () => {
    let cart
    let id
    let setCart
    const initProds = [
        {
            'id': 1,
            'name': 'prod1',
            'cost': 100,
            'description': 'description1'
        },
        {
            'id': 2,
            'name': 'prod2',
            'cost': 100,
            'description': 'description2'
        },
        {
            'id': 3,
            'name': 'prod3',
            'cost': 100,
            'description': 'description3'
        },
        {
            'id': 4,
            'name': 'prod4',
            'cost': 100,
            'description': 'description4'
        },
    ]
    const [prods, setProds] = useState(initProds)
    // function addInCart(){
    //     const copy = Object.assign([], cart)
    //     const prodAdd = prods.map(function(prod){
    //         if(id == prod.id){
    //             copy.push(prod)
    //         }
    //     })
    //     setCart(copy)
    // }
    const result = prods.map(function(prod){
        return <div key={prod.id} style={{display: 'flex'}}>
            <p>название: {prod.name}| цена: {prod.cost}| описание: {prod.description}</p> <button /*onClick={addInCart(prod.id)}*/>Добавить в корзину</button>
        </div>
    })
  return (
    <div>
        <h2>Каталог товаров:</h2>
      {result}
    </div>
  )
}

export default Catalog
