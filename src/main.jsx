import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js')
