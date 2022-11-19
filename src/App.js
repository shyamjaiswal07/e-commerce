import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopHeader from './components/header/TopHeader';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
