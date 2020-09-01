import React from 'react';
import './App.css';
import './css/style.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route} from 'react-router-dom'


// const AboutPage = () => (
//   <div>
//     <h2>AboutPage</h2>
//     </div>
//     )

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
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </div>
    
    )
  }
}


export default App;
