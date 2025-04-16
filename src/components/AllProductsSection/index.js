// import React, {useState, useEffect} from 'react'

// import Footer from '../Footer'
// import './index.css'

// const FILTERS = [
//   'IDEAL FOR',
//   'OCCASION',
//   'WORK',
//   'FABRIC',
//   'SEGMENT',
//   'SUITABLE FOR',
//   'RAW MATERIALS',
//   'PATTERN',
// ]

// const OPTIONS = ['Men', 'Women', 'Baby & Kids']

// const AllProductsSection = () => {
//   const [products, setProducts] = useState([])
//   const [expanded, setExpanded] = useState({})
//   const [selectedFilters, setSelectedFilters] = useState({})

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//   }, [])

//   const toggleExpand = filterName =>
//     setExpanded(prev => ({...prev, [filterName]: !prev[filterName]}))

//   const handleCheckboxChange = (filterName, option) => {
//     setSelectedFilters(prev => {
//       const current = prev[filterName] || []
//       return {
//         ...prev,
//         [filterName]: current.includes(option)
//           ? current.filter(item => item !== option)
//           : [...current, option],
//       }
//     })
//   }

//   const applyFilterLogic = product =>
//     Object.entries(selectedFilters).every(([filter, selectedOptions]) => {
//       if (selectedOptions.length === 0) return true
//       const content = (product.title + product.description).toLowerCase()
//       return selectedOptions.some(option =>
//         content.includes(option.toLowerCase()),
//       )
//     })

//   const filteredProducts = products.filter(applyFilterLogic)

//   return (
//     <div>
//       <div className="all-products-container">
//         <div className="sidebar">
//           <h4>{filteredProducts.length} ITEMS</h4>
//           <label>
//             <input type="checkbox" />
//             <span>Customizable</span>
//           </label>
//           {FILTERS.map(filterName => (
//             <div className="filter-group" key={filterName}>
//               <div
//                 className="filter-header"
//                 onClick={() => toggleExpand(filterName)}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={e => {
//                   if (e.key === 'Enter' || e.key === ' ')
//                     toggleExpand(filterName)
//                 }}
//               >
//                 <strong>
//                   {filterName}
//                   <span className="arrow-icon">
//                     {expanded[filterName] ? '▲' : '▼'}
//                   </span>
//                 </strong>
//               </div>
//               {expanded[filterName] && (
//                 <div className="filter-options">
//                   {OPTIONS.map(option => (
//                     <label key={option}>
//                       <input
//                         type="checkbox"
//                         checked={
//                           selectedFilters[filterName]?.includes(option) || false
//                         }
//                         onChange={() =>
//                           handleCheckboxChange(filterName, option)
//                         }
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="products-section">
//           <div className="products-grid">
//             {filteredProducts.map(product => (
//               <div key={product.id} className="product-card">
//                 <img src={product.image} alt={product.title} />
//                 <h4>{product.title.substring(0, 25)}...</h4>
//                 <p>${product.price}</p>
//                 <button className="wishlist">♡</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default AllProductsSection

// import React, {useState, useEffect} from 'react'

// import Footer from '../Footer'
// import './index.css'

// const FILTERS = [
//   'IDEAL FOR',
//   'OCCASION',
//   'WORK',
//   'FABRIC',
//   'SEGMENT',
//   'SUITABLE FOR',
//   'RAW MATERIALS',
//   'PATTERN',
// ]

// const OPTIONS = ['Men', 'Women', 'Baby & Kids']

// const AllProductsSection = () => {
//   const [products, setProducts] = useState([])
//   const [expanded, setExpanded] = useState({})
//   const [selectedFilters, setSelectedFilters] = useState({})

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//   }, [])

//   const toggleExpand = filterName =>
//     setExpanded(prev => ({...prev, [filterName]: !prev[filterName]}))

//   const handleCheckboxChange = (filterName, option) => {
//     setSelectedFilters(prev => {
//       const current = prev[filterName] || []
//       return {
//         ...prev,
//         [filterName]: current.includes(option)
//           ? current.filter(item => item !== option)
//           : [...current, option],
//       }
//     })
//   }

//   const applyFilterLogic = product =>
//     Object.entries(selectedFilters).every(([filter, selectedOptions]) => {
//       if (selectedOptions.length === 0) return true
//       const content = (product.title + product.description).toLowerCase()
//       return selectedOptions.some(option =>
//         content.includes(option.toLowerCase()),
//       )
//     })

//   const filteredProducts = products.filter(applyFilterLogic)

//   return (
//     <div>
//       <div className="all-products-container">
//         <div className="sidebar">
//           <h4>{filteredProducts.length} ITEMS</h4>
//           <label>
//             <input type="checkbox" />
//             <span>Customizable</span>
//           </label>
//           {FILTERS.map(filterName => (
//             <div className="filter-group" key={filterName}>
//               <div
//                 className="filter-header"
//                 onClick={() => toggleExpand(filterName)}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={e => {
//                   if (e.key === 'Enter' || e.key === ' ')
//                     toggleExpand(filterName)
//                 }}
//               >
//                 <strong>
//                   {filterName}
//                   <span className="arrow-icon">
//                     {expanded[filterName] ? '▲' : '▼'}
//                   </span>
//                 </strong>
//               </div>
//               {expanded[filterName] && (
//                 <div className="filter-options">
//                   {OPTIONS.map(option => (
//                     <label key={option}>
//                       <input
//                         type="checkbox"
//                         checked={
//                           selectedFilters[filterName]?.includes(option) || false
//                         }
//                         onChange={() =>
//                           handleCheckboxChange(filterName, option)
//                         }
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="products-section">
//           <div className="products-grid">
//             {filteredProducts.map(product => (
//               <div key={product.id} className="product-card">
//                 <img src={product.image} alt={product.title} />
//                 <h4>{product.title.substring(0, 25)}...</h4>
//                 <p>${product.price}</p>
//                 <button className="wishlist">♡</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default AllProductsSection

// import React, {useState, useEffect} from 'react'
// import {useWishlist} from '../../context/WishlistContext' // Import Wishlist Context
// import Footer from '../Footer'
// import './index.css'

// const FILTERS = [
//   'IDEAL FOR',
//   'OCCASION',
//   'WORK',
//   'FABRIC',
//   'SEGMENT',
//   'SUITABLE FOR',
//   'RAW MATERIALS',
//   'PATTERN',
// ]

// const OPTIONS = ['Men', 'Women', 'Baby & Kids']

// const AllProductsSection = () => {
//   const [products, setProducts] = useState([])
//   const [expanded, setExpanded] = useState({})
//   const {wishlist, addToWishlist} = useWishlist() // Use the wishlist context

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//   }, [])

//   const toggleExpand = filterName =>
//     setExpanded(prev => ({...prev, [filterName]: !prev[filterName]}))

//   const handleAddToWishlist = product => addToWishlist(product) // Add the product to wishlist

//   const isInWishlist = productId => wishlist.some(item => item.id === productId) // Check if the product is in the wishlist

//   return (
//     <div>
//       <div className="all-products-container">
//         <div className="sidebar">
//           <h4>{products.length} ITEMS</h4>
//           <label>
//             <input type="checkbox" />
//             <span>Customizable</span>
//           </label>
//           {FILTERS.map(filterName => (
//             <div className="filter-group" key={filterName}>
//               <div
//                 className="filter-header"
//                 onClick={() => toggleExpand(filterName)}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={e => {
//                   if (e.key === 'Enter' || e.key === ' ')
//                     toggleExpand(filterName)
//                 }}
//               >
//                 <strong>
//                   {filterName}
//                   <span className="arrow-icon">
//                     {expanded[filterName] ? '▲' : '▼'}
//                   </span>
//                 </strong>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="products-section">
//           <div className="products-grid">
//             {products.map(product => (
//               <div key={product.id} className="product-card">
//                 <img src={product.image} alt={product.title} />
//                 <h4>{product.title.substring(0, 25)}...</h4>
//                 <p>${product.price}</p>
//                 <button
//                   className={`wishlist ${
//                     isInWishlist(product.id) ? 'added' : ''
//                   }`}
//                   onClick={() => handleAddToWishlist(product)}
//                 >
//                   ♡
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default AllProductsSection
import React, {useState, useEffect} from 'react'
import {useWishlist} from '../../context/WishlistContext' // Import Wishlist Context
import Footer from '../Footer'
import './index.css'

const FILTERS = [
  'IDEAL FOR',
  'OCCASION',
  'WORK',
  'FABRIC',
  'SEGMENT',
  'SUITABLE FOR',
  'RAW MATERIALS',
  'PATTERN',
]

const OPTIONS = ['Men', 'Women', 'Baby & Kids']

const AllProductsSection = () => {
  const [products, setProducts] = useState([])
  const [expanded, setExpanded] = useState({})
  const [selectedFilters, setSelectedFilters] = useState({})
  const {wishlist, addToWishlist} = useWishlist()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const toggleExpand = filterName =>
    setExpanded(prev => ({...prev, [filterName]: !prev[filterName]}))

  const handleAddToWishlist = product => addToWishlist(product)

  const isInWishlist = productId =>
    wishlist.some(item => item.id === productId)

  const handleCheckboxChange = (filterName, option) => {
    setSelectedFilters(prev => {
      const current = prev[filterName] || []
      return {
        ...prev,
        [filterName]: current.includes(option)
          ? current.filter(item => item !== option)
          : [...current, option],
      }
    })
  }

  const applyFilterLogic = product =>
    Object.entries(selectedFilters).every(([filter, selectedOptions]) => {
      if (selectedOptions.length === 0) return true
      const content = (product.title + product.description).toLowerCase()
      return selectedOptions.some(option =>
        content.includes(option.toLowerCase()),
      )
    })

  const filteredProducts = products.filter(applyFilterLogic)

  return (
    <div>
      <div className="all-products-container">
        <div className="sidebar">
          <h4>{filteredProducts.length} ITEMS</h4>
          <label>
            <input type="checkbox" />
            <span>Customizable</span>
          </label>

          {FILTERS.map(filterName => (
            <div className="filter-group" key={filterName}>
              <div
                className="filter-header"
                onClick={() => toggleExpand(filterName)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ')
                    toggleExpand(filterName)
                }}
              >
                <strong>
                  {filterName}
                  <span className="arrow-icon">
                    {expanded[filterName] ? '▲' : '▼'}
                  </span>
                </strong>
              </div>

              {expanded[filterName] && (
                <div className="filter-options">
                  {OPTIONS.map(option => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        checked={
                          selectedFilters[filterName]?.includes(option) || false
                        }
                        onChange={() =>
                          handleCheckboxChange(filterName, option)
                        }
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="products-section">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h4>{product.title.substring(0, 25)}...</h4>
                <p>${product.price}</p>
                <button
                  className={`wishlist ${
                    isInWishlist(product.id) ? 'added' : ''
                  }`}
                  onClick={() => handleAddToWishlist(product)}
                >
                  ♡
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AllProductsSection

