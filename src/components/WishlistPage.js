import React from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie' // Import Cookies
import {useWishlist} from '../context/WishlistContext' // Import WishlistContext
import Header from './Header' // Correct the path here

import './WishlistPage.css' // Import the CSS for the WishlistPage

const WishlistPage = () => {
  const {wishlist, removeFromWishlist} = useWishlist() // Use the context for wishlist
  const navigate = useNavigate() // Initialize navigate

  const handleLogout = () => {
    Cookies.remove('jwt_token') // Remove cookie for JWT token
    navigate('/login') // Navigate to login page after logout
  }

  const handleRemove = productId => {
    removeFromWishlist(productId) // Remove product from wishlist
  }

  return (
    <>
      <Header />
      <div className="wishlist-page">
        <h1 className="wishlist-header">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-items">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default WishlistPage
