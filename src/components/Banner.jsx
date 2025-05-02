import banner1 from '../assets/banner-1.png'
import banner2 from '../assets/banner-2.png'
import banner3 from '../assets/banner-3.png'
import '../index.css'

function Banner() {
  return (
    <section className="banner">
      <div className="banner__image"></div>
      <div className="banner__content">
        <h2 className="section__header">
          Get Yummy Ice-Cream at a Reasonable Price
        </h2>
        <p className="section__description">
          Treat yourself to delightful ice creams without breaking the bank!
          Enjoy premium quality and mouthwatering flavors at prices that make
          every scoop worth it.
        </p>
        <div className="banner__flex">
          <div className="banner__card">
            <img src={banner1} alt="banner" />
            <h4>Fresh & Natural</h4>
          </div>
          <div className="banner__card">
            <img src={banner2} alt="banner" />
            <h4>Quick Packaging</h4>
          </div>
          <div className="banner__card">
            <img src={banner3} alt="banner" />
            <h4>Fast Delivery</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;