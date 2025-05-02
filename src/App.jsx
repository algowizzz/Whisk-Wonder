// import { useState, useEffect } from 'react'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Popular from './components/Popular'
// import Discover from './components/Discover'
// import Banner from './components/Banner'
// import Subscribe from './components/Subscribe'
// import Footer from './components/Footer'
// import './index.css';

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   useEffect(() => {
//     const sr = ScrollReveal({
//       origin: 'top',
//       distance: '60px',
//       duration: 2500,
//       delay: 400,
//     })

//     sr.reveal(`.section__container, .header__content, .popular__grid, .discover__grid, .banner__content, .subscribe__content, .footer__container`, {
//       interval: 500,
//     })

//     return () => sr.destroy()
//   }, [])

//   return (
//     <div className="app">
//       <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
//       <Header />
//       <Popular />
//       <Discover />
//       <Banner />
//       <Subscribe />
//       <Footer />
//     </div>
//   )
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react'
// import ScrollReveal from 'scrollreveal'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Popular from './components/Popular'
// import Discover from './components/Discover'
// import Banner from './components/Banner'
// import Subscribe from './components/Subscribe'
// import Footer from './components/Footer'
// import './index.css'

// function App() {
//   useEffect(() => {
//     const scrollRevealOption = {
//       distance: "50px",
//       origin: "bottom",
//       duration: 1000,
//     };

//     ScrollReveal().reveal(".header__image img", { duration: 1000 });
//     ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 500 });
//     ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 1000 });
//     ScrollReveal().reveal(".header__btn", { ...scrollRevealOption, delay: 1500 });
//     ScrollReveal().reveal(".header__content .socials", { ...scrollRevealOption, delay: 2000 });

//     ScrollReveal().reveal(".popular__card", { ...scrollRevealOption, interval: 500 });

//     ScrollReveal().reveal(".discover__card img", { ...scrollRevealOption, origin: "left" });
//     ScrollReveal().reveal(".discover__card:nth-child(2) img", { ...scrollRevealOption, origin: "right" });
//     ScrollReveal().reveal(".discover__card__content h4", { ...scrollRevealOption, delay: 500 });
//     ScrollReveal().reveal(".discover__card__content .section__description", { ...scrollRevealOption, delay: 1000 });
//     ScrollReveal().reveal(".discover__card__content h3", { ...scrollRevealOption, delay: 1500 });
//     ScrollReveal().reveal(".discover__card__btn", { ...scrollRevealOption, delay: 2000 });

//     ScrollReveal().reveal(".banner__content .section__header", scrollRevealOption);
//     ScrollReveal().reveal(".banner__content .section__description", { ...scrollRevealOption, delay: 500 });
//     ScrollReveal().reveal(".banner__card", { ...scrollRevealOption, delay: 1000, interval: 500 });

//     ScrollReveal().reveal(".subscribe__content .section__header", scrollRevealOption);
//     ScrollReveal().reveal(".subscribe__content .section__description", { ...scrollRevealOption, delay: 500 });
//     ScrollReveal().reveal(".subscribe__content form", { ...scrollRevealOption, delay: 1000 });

//     return () => ScrollReveal().destroy();
//   }, []);

//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Header />
//               <Popular />
//               <Discover />
//               <Banner />
//               <Subscribe />
//             </>
//           } />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Popular from './components/Popular';
import Discover from './components/Discover';
import Banner from './components/Banner';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './index.css';

function App() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", { duration: 1000 });
    ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".header__btn", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".header__content .socials", { ...scrollRevealOption, delay: 2000 });

    ScrollReveal().reveal(".popular__card", { ...scrollRevealOption, interval: 500 });

    ScrollReveal().reveal(".discover__card img", { ...scrollRevealOption, origin: "left" });
    ScrollReveal().reveal(".discover__card:nth-child(2) img", { ...scrollRevealOption, origin: "right" });
    ScrollReveal().reveal(".discover__card__content h4", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".discover__card__content .section__description", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".discover__card__content h3", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".discover__card__btn", { ...scrollRevealOption, delay: 2000 });

    ScrollReveal().reveal(".banner__content .section__header", scrollRevealOption);
    ScrollReveal().reveal(".banner__content .section__description", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".banner__card", { ...scrollRevealOption, delay: 1000, interval: 500 });

    ScrollReveal().reveal(".subscribe__content .section__header", scrollRevealOption);
    ScrollReveal().reveal(".subscribe__content .section__description", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".subscribe__content form", { ...scrollRevealOption, delay: 1000 });

    return () => ScrollReveal().destroy();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Popular />
              <Discover />
              <Banner />
              <Subscribe />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;