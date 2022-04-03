import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './reset.css';
import './styles.css';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>

          <Route element={<Home />} path='/home' />
          <Route element={<Contact />} path='/contact' />

        </Routes>
      </BrowserRouter>
    </div>
  );
}