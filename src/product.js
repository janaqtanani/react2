import React from "react";
import Car from "./car";
import './car.css';
import ford from './ford.jpg';
import images from './images.jpg';
import goalf from './goalf.jpg';
import bmw from './bmw.jpg';

class Product extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
            <div >
                   <div className="d1">
                <Car brand="bmw" model="1998" color="red"  image={bmw} ></Car>
                  <Car brand="ford" model="2020" color="white" image={ford}></Car></div>
                  <div className="d2">
                  <Car brand="golf" model="1999" color="black" image={goalf}></Car>
                  <Car brand="g-class" model="2023" color="black" image={images}></Car>
                   </div>
                  </div>
        )
    }
    }



export default Product;