import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utili';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    
    handleSubmit = async (event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} =this.state;
        if(password !== confirmPassword){
            alert("Password does not match")
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, displayName)
            this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            }
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
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} >
                    <FormInput
                     type="text"
                      handleChange={this.handleChange}
                       required name="displayName"
                      value={this.state.displayName}
                       label="Display Name" />
                    <FormInput 
                    type="email"
                     handleChange={this.handleChange}
                      required
                       name="email"
                       value={this.state.email}
                        label="Email" />
                    <FormInput type="password" handleChange={this.handleChange} required name="password" value={this.state.password} label="Password" />
                    <FormInput type="password" 
                    handleChange={this.handleChange}
                     required name="confirmPassword"
                      value={this.state.confirmPassword} label="Confirm Password" />
                    
                    <div className="buttons">
                        <CustomButton type="submit">Save</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}
export default SignUp;