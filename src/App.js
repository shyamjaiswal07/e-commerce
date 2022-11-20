import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './components/header/MainHeader';
import Hero from './components/heroSection/Hero';

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<MainHeader />} />
          <Route path='/hero' element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
