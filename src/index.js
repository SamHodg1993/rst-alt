import React from 'react'
import ReactDOM from 'react-dom/client'

import Interim from './components/Interim';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Interim />   {/* Had to do this to enable the use of useContextr in app */}
  </React.StrictMode>
)
