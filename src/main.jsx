import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalContextProvider } from './Context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>

)
