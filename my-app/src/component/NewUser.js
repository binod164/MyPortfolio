import React from 'react'

function NewUser() {
    return (
       <div class ="container">
         <img class = "about" src = "http://www.beautiful-women-pedia.com/images/nepal.jpg"/>
         <div class="centered">
        <h1><b>SignUp</b></h1>   
         <p>Enter your full name</p>
       <input id="fullname" placeholder="Enter fullname" type="text"></input>
       <p>Enter your email address</p>
       <input id="emailAddress" placeholder="Enter email" type="email"></input>
       <p>Enter your password</p>
       <input id="password" placeholder="Enter password" type="text"></input>
       <p>Re-enter your password</p>
       <input id="password" placeholder="Reenter password" type="text"></input>
         <br></br>
         <br></br>
       <button type="submit" className="btn">Login</button> <br />
       <br></br>

           

         </div>
       </div>
    )
}

export default NewUser
