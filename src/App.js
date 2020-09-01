import React from 'react';
import './App.css';
import './css/style.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header-component';
import SignAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth} from './firebase/firebase.utili';


// const AboutPage = () => (
//   <div>
//     <h2>AboutPage</h2>
//     </div>
//     )

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      message:"Welcome back to react",
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

   componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser : user});
      console.log(user,"user");
      })
   }
   componentWillUnmount(){
    this.unsubscribeFromAuth();
   }
  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={HomePage} /> 
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/sign" component={SignAndSignup} />
        </Switch>
      </div>
    
    )
  }
}


export default App;
