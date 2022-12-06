import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { CelinaApp } from './CelinaApp'
import { store } from './store/store'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <CelinaApp />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
)
