import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './css/reset.css';
import './css/styles.css';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>

          <Route element={<Home />} path='/' exact />
          <Route element={<Contact />} path='/contact' />

        </Routes>
      </BrowserRouter>
    </div>
  );
}