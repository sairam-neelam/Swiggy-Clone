import Header from '../Header'
import Footer from '../Footer'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartItem from '../CartItem'
import CartTotal from '../CartTotal'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const isCartEmpty = cartList.length === 0

      return (
        <>
          <Header />
          <div className="cart-container">
            {isCartEmpty ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="cart-headers-cont">
                  <p className="cart-header-items">Item</p>
                  <div className="qty-price-cont">
                    <p className="cart-header-qty">Quantity</p>
                    <p className="cart-header-price">Price</p>
                  </div>
                </div>
                <ul className="cart-list">
                  {cartList.map(eachItem => (
                    <CartItem key={eachItem.id} cartItem={eachItem} />
                  ))}
                </ul>
                <CartTotal />
              </div>
            )}
          </div>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
