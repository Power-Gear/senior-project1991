import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Categories from './Components/Categories';
import Admin from './Components/admin'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="categories" element={<Categories />} />
          <Route path="admin/*" element={<Admin />} /> {/* Add the admin route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
