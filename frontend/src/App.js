import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import BookForm from './components/BookForm';
import Signin from './pages/signin';
import Signup from './pages/signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="add" element={<BookForm/>} />
          <Route path="signin" element={<Signin/>} />
          <Route path="signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
