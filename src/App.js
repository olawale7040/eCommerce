import React from 'react';
import './App.css';
import './css/style.css';
import HomePage from './pages/homepage/homepage.component';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      message:"Welcome back to react"
    }
  }
  render(){
    return(
    // <div className="wrapper-box">{this.state.message}</div>
    <HomePage />
    )
  }
}


export default App;
