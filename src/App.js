import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home.js'; 
import './App.css';
import './Home.css'
import NavigationBar from './NavigationBar.js';
import './NavigationBar.css'
import Product from './product.js';
import Car from './car.js'
import './car.css'
import Payment from './payment.js';


function App() {
  
  return (
    <div className="App">
    <NavigationBar></NavigationBar>

    <BrowserRouter>

    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home/>}
                        ></Route>
                        <Route
                            exact
                            path="/product"
                            element={<Product/>}
                        ></Route>
                         <Route
                            exact
                            path="/payment"
                            element={<Payment />}
                        ></Route> 
                    </Routes>
                
            
</BrowserRouter>
    
     
</div>
  );
}

export default App;
