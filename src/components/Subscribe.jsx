import { useState } from 'react';
import '../index.css';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://your-api-endpoint.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      setError(err.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section__container subscribe__container" id="contact">
      <div className="subscribe__content">
        <h2 className="section__header">Subscribe For Discounts</h2>
        <p className="section__description">
          Don't miss out on sweet deals! Subscribe now to receive exclusive
          discounts and updates on our latest ice cream flavors and special
          offers.
        </p>
        
        {isSuccess ? (
          <div className="subscribe__success">
            <p>Thank you for subscribing! Check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="subscribe__form">
            <div className="form__group">
              <input
                type="email"
                placeholder="Type Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              {error && <p className="form__error">{error}</p>}
            </div>
            <button 
              type="submit" 
              className="btn btn__subscribe"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Subscribe;