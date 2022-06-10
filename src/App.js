
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Home from './Components/Home/Home';

function App() {
  return (
    <div >
     <Header></Header>
     {/* <Particlese></Particlese> */}
     <Routes>
       <Route path='/#home' element={<Home></Home>} />
         
      <Route path='/#about' element={<About></About>}></Route>
      <Route path='/#project' element={<About></About>}></Route>
      <Route path='/#contact' element={<Contact></Contact>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
