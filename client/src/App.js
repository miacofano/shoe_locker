import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import ShoeForm from './components/ShoeForm';
import OneShoe from './components/OneShoe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<DisplayAll/>} />
          <Route path="/shoe" element = {<ShoeForm/>} />
          <Route path="/shoe/:id" element = {<OneShoe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;