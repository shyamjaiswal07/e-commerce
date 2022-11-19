import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from './components/header/TopHeader';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <h1>Hello</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
