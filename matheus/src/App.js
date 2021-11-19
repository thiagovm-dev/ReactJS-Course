import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  
  
  return (
    <Router>
      <Navbar />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
    </Router>

    )
} 

export default App;
 