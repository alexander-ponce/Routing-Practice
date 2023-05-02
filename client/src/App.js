import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Routing from './components/Routing';

const Home = (props) => {
  return (
    <h1> Welcome </h1>
  );
}


function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/home' element = {<Home/>} />
        <Route path='/:number' element = {<Routing/>} />
        <Route path='/:numberUnicorn/:color1/:color2' element = {<Routing/>} />


      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
