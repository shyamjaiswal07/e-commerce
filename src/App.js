import './App.css';
import Footer from "./components/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './components/header/MainHeader';
import { Home } from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path='/' element={<Home />} />         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
