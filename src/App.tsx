import { Route , Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Login from './components/pages/auth/Login';
import Signup from './components/pages/auth/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
       <Navigation />
       <Routes>
         <Route path="/multy-page-test/" element={<Home/>} />
         <Route path="/multy-page-test/about" element={<About/>} />
         <Route path="/multy-page-test/blog" element={<Blog/>} />
         <Route path="/multy-page-test/login" element={<Login/>} />
         <Route path="/multy-page-test/signup" element={<Signup/>} />
        </Routes>
    </>
  );
}

export default App;
