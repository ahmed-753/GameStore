import {Routes,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route  path='/cart' element={<CartPage/>}/>
        <Route  path='/game/:id' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
