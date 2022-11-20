import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './components/header/MainHeader';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHeader />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
