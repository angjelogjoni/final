import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  return (
    <section className='My Cart'>
      {}
      <header>
        <h2>Checkout:</h2>
      </header>
      {}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Total Price: <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          Restart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer