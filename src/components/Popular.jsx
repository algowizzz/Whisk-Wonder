import { Link } from 'react-router-dom';
import popular1 from '../assets/popular-1.png';
import popular2 from '../assets/popular-2.png';
import popular3 from '../assets/popular-3.png';
import '../index.css';

function Popular() {
  const products = [
    { id: 1, img: popular1, name: 'Mango Tango Sorbet', price: 5.49, rating: 4.8 },
    { id: 2, img: popular2, name: 'Chocolate Fudge Delight', price: 5.99, rating: 4.9 },
    { id: 3, img: popular3, name: 'Strawberry Swirl Bliss', price: 4.99, rating: 4.7 },
  ];

  const handleAddToCart = (productId) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = currentCart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const productToAdd = products.find(p => p.id === productId);
      currentCart.push({ ...productToAdd, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <section className="section__container popular__container" id="menu">
      <h2 className="section__header">Popular Ice-Cream</h2>
      <div className="popular__grid">
        {products.map(product => (
          <div key={product.id} className="popular__card">
            <img src={product.img} alt={product.name} />
            <div className="popular__card__content">
              <h4>{product.name}</h4>
              <div className="popular__card__details">
                <div className="popular__card__rating">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                  <span>({product.rating})</span>
                </div>
                <h3>${product.price.toFixed(2)}</h3>
              </div>
              <div className="popular__card__buttons">
                <button 
                  className="btn btn__cart-action"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
                <Link 
                  to="/cart" 
                  className="btn btn__cart-action"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;