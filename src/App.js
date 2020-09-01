import React from 'react';
import './App.css';
import './css/style.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header-component';


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
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/shop" component={ShopPage} />
        </Switch>
      </div>
    
    )
  }
}


export default App;
