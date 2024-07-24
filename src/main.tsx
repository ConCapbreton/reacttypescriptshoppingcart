import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './context/CartProvider.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
)

// you only need to nest the elements that need the context in the provider elements.
// in this project there is only the App element so it needs to be wrapped in both providers (if there were more then potentially they wouldnt need to be wrapped). 