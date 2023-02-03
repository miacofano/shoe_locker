import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import ShoeForm from './components/ShoeForm';
import OneShoe from './components/OneShoe';
import EditShoeForm from './components/EditShoeForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<DisplayAll/>} />
          <Route path="/shoe" element = {<ShoeForm/>} />
          <Route path="/shoe/:id" element = {<OneShoe/>} />
          <Route path="/shoe/edit/:id" element = {<EditShoeForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;