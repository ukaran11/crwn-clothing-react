import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
       <Routes>
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/" element={<HomePage />} />
       </Routes>
    </div>
  );
}

export default App;
