
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './component/Home';
import ThingsToDo from './component/ThingsToDo';
import Contact from './component/Contact';
import Packages from './component/Packages';
import NavBar from './component/NavBar';
import NewUser from './component/NewUser';
import './App.css';
 
class App extends Component {
  render() {
    return (      
      
       <BrowserRouter>
      
        <div>
          
          <NavBar />
          
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/thingstodo" component={ThingsToDo} exact/>
             <Route path="/packages" component={Packages}/>
             <Route path="/contact" component={Contact}/>
              <Route path="/newuser" component={NewUser}/>

           
           </Switch>
           
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;