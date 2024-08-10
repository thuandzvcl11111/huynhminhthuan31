import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import {BrowserRouter , Route, Routes,Switch } from 'react-router-dom'
import Product from './pages/Product';
import { JqueryContextProvider } from './pages/JQuery';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Account from './pages/Account';
import ProductDetail from './pages/ProductDetail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Fragment } from 'react';
import Header from './pages/Header';
import Listsanpham from './admin/Listsanpham';
import Themsanpham from './admin/Themsanpham';
import Suasanpham from './admin/Suasanpham';
import ProtectedRoute from './ProtectRoute';
import Checkout from './pages/Checkout';
// import Js from './components/Js';
function App() {
  return (
    <Fragment>
        <div className="App">
          {/* <Header/> */}
          <BrowserRouter>
          {/* //User interface (chuc_vu = 1) */}
            <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/dienthoai/'element={<Product/>} />
              {/* route product */}
              <Route path='/dienthoai/ram/:id_ram'element={<Product/>} />
              <Route path='/dienthoai/dieuhanh/:id_dieuhanh'element={<Product/>} />
              <Route path='/dienthoai/manhinh/:id_manhinh'element={<Product/>} />
              <Route path='/dienthoai/thuonghieu/:id_thuonghieu'element={<Product/>} />
              {/* route product */}
              <Route path='/chitiet/:id' element={<ProductDetail/>} />
              <Route path='/cart'element={<Cart/>} />
              <Route path='/lienhe'element={<Contact/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/thanhtoan' element={<Checkout/>}/>
              {/* route account */}
              <Route path='/account' element={<Account/>} />
              <Route path='/account/dangky' element={<Signup/>} />
              <Route path='/account/dangnhap' element={<Login/>} />
              {/* route account */}
              <Route element={<ProtectedRoute/>}>
                <Route path='/admin' element={<Listsanpham/>}/>
                <Route path='/admin/themsp' element={<Themsanpham/>}/>
                <Route path='/admin/suasp/:id' element={<Suasanpham/>}/>
              </Route>
            </Routes>
           
            {/* //User interface (chuc_vu = 1) */}
          </BrowserRouter>
        </div>
    </Fragment>
  );
}


export default App;
