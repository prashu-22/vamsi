// import {useState} from 'react'
// import {useNavigate, Link} from 'react-router-dom'

// import {
//   FaSearch,
//   FaHeart,
//   FaShoppingBag,
//   FaUser,
//   FaBars,
//   FaTimes,
// } from 'react-icons/fa'
// import Cookies from 'js-cookie'
// import './index.css'

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     Cookies.remove('jwt_token')
//     navigate('/login')
//   }

//   return (
//     <header className="header">
//       <div className="header-container">
//         {/* Logo */}
//         <div className="logo-section">
//           <span className="logo-text">LOGO</span>
//         </div>

//         {/* Hamburger for mobile */}
//         <button
//           className="hamburger"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Nav Links */}
//         <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
//           <Link to="/products" onClick={() => setMenuOpen(false)}>
//             SHOP
//           </Link>
//           <Link to="/cart" onClick={() => setMenuOpen(false)}>
//             CART
//           </Link>
//           <Link to="/stories" onClick={() => setMenuOpen(false)}>
//             STORIES
//           </Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>
//             ABOUT
//           </Link>
//           <Link to="/contact" onClick={() => setMenuOpen(false)}>
//             CONTACT US
//           </Link>
//           <button className="logout-btn mobile-only" onClick={handleLogout}>
//             Logout
//           </button>
//         </nav>

//         {/* Icons and Logout for desktop */}
//         <div className="icon-section">
//           <FaSearch className="icon" />
//           <FaHeart className="icon" />
//           <FaShoppingBag className="icon" />
//           <FaUser className="icon" />
//           <div className="language">
//             ENG <span className="arrow">⌄</span>
//           </div>
//           <button className="logout-btn desktop-only" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }
// export default Header

import Cookies from 'js-cookie' // Move this import above WishlistContext
import React from 'react'
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useWishlist} from '../../context/WishlistContext' // Wishlist context should come after js-cookie
import './index.css'

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const navigate = useNavigate()
  const {wishlist} = useWishlist() // Access wishlist from context

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <span className="logo-text">
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
              />
            </Link>
          </span>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            SHOP
          </Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            CART
          </Link>
          <Link to="/stories" onClick={() => setMenuOpen(false)}>
            STORIES
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT US
          </Link>
          <button className="logout-btn mobile-only" onClick={handleLogout}>
            Logout
          </button>
        </nav>

        <div className="icon-section">
          <FaSearch className="icon" />
          <Link to="/wishlist">
            <FaHeart className="icon" />
            {wishlist.length > 0 && (
              <span className="wishlist-count">{wishlist.length}</span>
            )}
          </Link>
          <FaShoppingBag className="icon" />
          <FaUser className="icon" />
          <div className="language">
            ENG <span className="arrow">⌄</span>
          </div>
          <button className="logout-btn desktop-only" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
