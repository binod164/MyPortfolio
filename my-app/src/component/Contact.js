import React from 'react';
 
const Contact = () => {
    return (
   <div class ="container">
      <img class = "about" src = "https://media.istockphoto.com/photos/contact-us-picture-id1049658692?k=6&m=1049658692&s=612x612&w=0&h=Os6Ii7LoUA-7c4CxnGYZzGqKJqGZIPgCOnXsD30EBbo="/>
      <div class="center">
       <h1> Questions Or Comments?</h1>
       <p>Enter your email address</p>
       <input id="emailAddress" placeholder="Enter email" type="email" size="30"></input>
       <p>Enter your full name</p>
       <input id="fullname" placeholder="Enter full name" type="text" size="30"></input>
       <p>Enter questions or comments</p>
       <input id="Comments" placeholder="Enter questions or comments" type="text" size="50"></input>
         <br></br>
         <br></br>
       <button type="submit" className="btn">Submit</button> <br />
         </div>
       </div>

      
    );
}
 
export default Contact;