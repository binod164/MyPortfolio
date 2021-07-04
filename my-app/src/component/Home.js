import React from 'react';
import { NavLink } from 'react-router-dom';
const home = () => {
    return (
       <div class ="container">
         <img class = "about" src = "http://www.beautiful-women-pedia.com/images/nepal.jpg"/>
         <div class="centered">
        <h1><b>Namaste Nepal</b></h1>    <br></br>
       <p>Enter your email address</p>
       <input id="emailAddress" placeholder="Enter email" type="email"></input>
       <p>Enter your password</p>
       <input id="password" placeholder="Enter password" type="text"></input>
          <br></br>
         <br></br>
       <button type="submit" className="btn">Login</button> <br />
       <br></br>
       
           <NavLink to="/newuser">New User? Create an account</NavLink>

         </div>
       </div>
    );
}
 
export default home;