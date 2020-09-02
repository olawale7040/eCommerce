import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss'
import {auth,signInWithGoogle} from '../../firebase/firebase.utili';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    
    handleSubmit = async (event)=>{
        event.preventDefault();
        const { email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        }
        catch(error){
            console.log(error);
        }
       
    }
    handleChange=(event)=>{
        const {name,value} =event.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" handleChange={this.handleChange} required name="email" value={this.state.email} label="Email" />
                    <FormInput type="password" handleChange={this.handleChange} required name="password" value={this.state.password} label="Password" />
                    
                    <div className="buttons">
                        <CustomButton type="submit">Login</CustomButton>
                        <CustomButton onClick={signInWithGoogle} GoogleSignIn="google-sign-in">Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}
export default SignIn;