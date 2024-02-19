import React from "react";
import './car.css'

class Car extends React.Component{
    constructor(props){
        super(props);
        
        
    }

    render(){

        return(
            <div>
          <img src={this.props.image} style={{borderColor:this.props.color}}></img>
            <h1>model is:{this.props.model}</h1>
            <h2>brand is:{this.props.brand}</h2>
            <h3>color is :{this.props.color}</h3>
            </div>
         
        )
    }
}

export default Car;