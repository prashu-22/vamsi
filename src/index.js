// import React from 'react'
// import ReactDOM from 'react-dom'
// import {BrowserRouter} from 'react-router-dom'

// import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root'),
// )
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {WishlistProvider} from './context/WishlistContext' // Import the provider

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
