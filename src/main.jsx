import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import App from './App'
import AccessibilityReport from './AccessibilityReport'
import AppRemediated from './AppRemediated'
import StatisticsPage from './StatisticsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accessibility-report" element={<AccessibilityReport />} />
        <Route path="/remediated" element={<AppRemediated />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
