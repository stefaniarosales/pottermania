import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { peristor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
//styles
import { StyledGlobal } from './styles/globalStyled.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <StyledGlobal />
      <BrowserRouter>
      <PersistGate loading={null} persistor={peristor}>
        <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
  </>,
)
