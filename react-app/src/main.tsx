import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.tsx'
// import { Button as Btn } from './Button.tsx'
import Counter from './Count.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Counter /> */}
    <App />
  </StrictMode>,
)
