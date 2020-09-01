import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    
    handleSubmit =(event)=>{
        event.preventDefault();
        this.setState({password:""});
        this.setState({email:""});
    }
    handleChange=(event)=>{
        const {name,value} =event.target;
        this.setState({[name]:value});
        console.log(this.state,"Current state")
    }
    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" handleChange={this.handleChange} required name="email" value={this.state.email} label="Email" />
                    <FormInput type="password" handleChange={this.handleChange} required name="password" value={this.state.password} label="Password" />
                    <CustomButton type="submit">Login</CustomButton>
                    {/* <button className="btn btn-primary">Submit</button> */}
                </form>

            </div>
        )
    }
}
export default SignIn;