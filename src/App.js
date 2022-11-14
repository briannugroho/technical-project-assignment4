import About from './components/about/About';
import Blog from './components/blog/Blog';
import Mulai from './components/intro/Mulai';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productList/ProductList';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Mulai/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
