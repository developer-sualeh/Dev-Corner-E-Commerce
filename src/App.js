import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
      </Router>
    
    
    </>
      
    
  );
}

export default App;
