import React from 'react'
import Contador from './contador'


const App = () => {
  return (
    
    
    <div><Contador zero = "0"/>
      
      <button onclick={incrementar()}>+</button>
      <button onclick={decrementar()}>-</button>
      <button onclick={makeAnOrder()}>Realizar Pedido</button>
    
    </div>
    
  )
}

export default App