import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './component/layout/layout';
import Home from './pages/home/home';
import ProductView from './pages/product/productView';
import AddProduct from './pages/addProduct/addProduct';
import TabProduct from './pages/admin/tabProduct/tabProduct';
// import UpdateProduct from './pages/updateProduct/updateProduct'


function App() {


  return(
  <BrowserRouter>

      <Routes>

        <Route element = {<Layout />} >   
          <Route index element={<Home />} /> 
         
          
          <Route path="AddProduct" element = {<AddProduct />} />
          <Route path="/ProductView/:idProduct" element = {<ProductView />} />
          <Route path="TabProduct" element = {<TabProduct />} />
          {/* <Route path="UpdateProduct" element = {<UpdateProduct />} /> */}
          
        
        </Route>

      </Routes>

  </BrowserRouter>
  );
}

export default App;
