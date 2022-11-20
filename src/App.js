import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './components/header/MainHeader';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<MainHeader />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
