import { Routes, Route } from 'react-router'
import { DefaultViteApp } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultViteApp />} />
    </Routes>
  )
}

export default App
