import './App.css';
import { BrowserRouter } from "react-router-dom";
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
