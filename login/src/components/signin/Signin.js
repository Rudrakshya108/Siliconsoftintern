import React from 'react';
import "./Signin.css";
//import './SigninAneka.css';

function Signin() {
    return(
    
        <form>

        <h2> Sign In </h2>

        <div >

          <input type=" Username" name= "Username" placeholder = "Username" className="form-control"></input>
          </div>
    
          <div>
          <input type=" Password" name= "Password" placeholder = "Password" className="form-control"></input>
    
          </div>
    
          <div className="button">
          <button type ="submit"><h3><b> Login  </b> </h3></button>
          
          </div>
          </form>
    
    
    
        
        



    );
};


export default Signin;