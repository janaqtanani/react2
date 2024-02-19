import React from "react";
import './Home.css';
import './NavigationBar.js'
import './NavigationBar.css'
class Home extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", this.state.email, this.state.password);
      };
    render(){
        return(
        <div class="contener">
          <form onSubmit={this.handleSubmit}> 
          <br/>
          <label>email</label><br/>
          <input type="email" value={this.props.value} onChange={this.handleChange} /><br/>
          <label>password</label><br/>
          <input type="password" value={this.props.value} onChange={this.handleSubmit}/><br/><br/>
           <input type="submit" value="Submit" /><br/><br/>
           </form>
            </div>
         
        )
    }
}

export default Home;