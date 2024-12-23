

import './App.css';

import Navbar from './Component/Navbar/navbar';
import HomeScreen from './Component/Navbar/screen/HomeScreen/homescreen';
import { Routes, Route } from 'react-router-dom';
import Products from './Component/Navbar/screen/HomeScreen/Products/products';
import Footer from './Component/Navbar/Footer/footer';
import Cart from './Component/Navbar/screen/Cart/cart';
import Mencoll from './Component/Navbar/screen/MensColl/mencoll';
import Womencoll from './Component/Navbar/screen/WomenColl/womencoll';


function App() {
  return (
  
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path= '/' element={<HomeScreen/>}/>
      <Route path= '/products' element={<Products/>} />
      <Route path='/cart' element= {<Cart />} />
      <Route path='/Men"s collection' element= {<Mencoll />} /> 
      <Route path='/women"s collection' element= {<Womencoll />} />
   


    
     </Routes>
     <Footer/>
    
    </div>
    
  );
}

export default App;
