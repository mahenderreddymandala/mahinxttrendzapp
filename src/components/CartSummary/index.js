// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      console.log('tho')
      let total = 0
      cartList.forEach(eachProduct => {
        total += eachProduct.quantity * eachProduct.price
      })
      return (
        <div className="summary">
          <span>
            Order Total : <span className="total"> RS {total}</span>
          </span>
          <p>{cartList.length} items in cart</p>
          <button type="button" className="btn-primary">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
