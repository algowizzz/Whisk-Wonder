import { useState, useEffect } from 'react';
import { RiShoppingCartLine, RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../index.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'credit'
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { cartItems, customerInfo: formData });
    alert('Order placed successfully!');
    // Clear cart after submission
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section className="section__container cart__container">
      <h2 className="section__header">Your Ice Cream Order</h2>
      
      <div className="cart__content">
        <div className="cart__items">
          <h3><RiShoppingCartLine /> Cart Items ({cartItems.length})</h3>
          
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p className="section__description">Your cart is empty</p>
              <Link to="/" className="btn">Browse Products</Link>
            </div>
          ) : (
            <ul className="cart__list">
              {cartItems.map(item => (
                <li key={item.id} className="cart__item">
                  <div className="cart__item__info">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="cart__item__actions">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="btn btn__quantity"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="btn btn__quantity"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="btn btn__remove"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                  <div className="cart__item__total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          )}
          
          {cartItems.length > 0 && (
            <div className="cart__total">
              <h4>Total: ${total.toFixed(2)}</h4>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <form onSubmit={handleSubmit} className="order__form">
            <h3>Delivery Information</h3>
            
            <div className="form__group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form__group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
              />
            </div>
            
            <div className="form__group">
              <label>Payment Method</label>
              <div className="payment__options">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={formData.payment === 'credit'}
                    onChange={handleChange}
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={formData.payment === 'cash'}
                    onChange={handleChange}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn__submit"
            >
              Place Order (${total.toFixed(2)})
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Cart;