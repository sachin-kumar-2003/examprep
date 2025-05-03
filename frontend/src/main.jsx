import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'
// import { AppContextProvider } from './context/AppContext.jsx'
// const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
)
