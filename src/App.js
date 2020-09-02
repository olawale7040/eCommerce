import React from 'react';
import './App.css';
import './css/style.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header-component';
import SignAndSignup from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import {auth, createUserProfileDocument} from './firebase/firebase.utili';
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action';


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
    //  this.unsubscribeFromAuth = auth.onAuthStateChanged( async user =>{
    //   // createUserProfileDocument(user)
    //   this.setState({currentUser : user});
    //   console.log(user,"user");
    //   })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // });
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          // console.log(this.state.currentUser);
        });
      }
      this.props.setCurrentUser(userAuth);
      // this.setState({ currentUser: userAuth });
    });
   }
   componentWillUnmount(){
    this.unsubscribeFromAuth();
   }
  render(){
    return(
      <div>
        <Header  />
        <Switch>
          <Route exact={true} path="/" component={HomePage} /> 
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/sign" component={SignAndSignup} />
        </Switch>
      </div>
    
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser:user => dispatch(setCurrentUser(user)),
})
export default connect(null,mapDispatchToProps)(App);
