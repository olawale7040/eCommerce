import React from 'react';
import './App.css';
import './css/style.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom'


const AboutPage = () => (
  <div>
    <h2>AboutPage</h2>
    </div>
    )

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      message:"Welcome back to react"
    }
  }
   
  render(){
    return(
      <div>
        <Route exact={true} path="/about" component={AboutPage} />
        <Route exact={true} path="/" component={HomePage} />
      </div>
    
    )
  }
}


export default App;
