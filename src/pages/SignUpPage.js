import { Component } from "react";
import axios from 'axios';

class SignUpPage extends Component {
    state = {
        disabled: true,
        username: '',
        email: '',
        password: ''
    };

    onChangePassword = (e) => {
        const value = e.target.value;
        this.setState({password: value});
    }
    
    onChangeRepeat = (e) => {
        const value = e.target.value;
        this.setState({disabled: this.state.password != value});
    }

    onChangeUsername = (e) => {
        const value = e.target.value;
        this.setState({username: value});
    }

    onChangeEmail = (e) => {
        const value = e.target.value;
        this.setState({email: value});
    }

    submit = () => {
        const { username, email, password } = this.state;
        const body = {
            username,
            email,
            password
        }
        axios.post("/api/1.0/users", body);
    }

    render(){
        return(
            <div>
                <h1 className="hello-world">Sign Up</h1>;
                <label htmlFor="inputUsername">Username</label>
                <input id="inputUsername" onChange={this.onChangeUsername} placeholder="username" type="text" />
                <label htmlFor="inputEmail">E-mail</label>
                <input id="inputEmail" onChange={this.onChangeEmail} placeholder="email" type="text" />
                <label htmlFor="inputPassword">Password</label>
                <input id="inputPassword" type="password" onChange={this.onChangePassword}/>
                <label htmlFor="repeatInputPassword">Password Repeat</label>
                <input id="repeatInputPassword" type="password" onChange={this.onChangeRepeat}/>
                <button onClick={this.submit} disabled={this.state.disabled} type="submit">Sign Up</button>
            </div>
        );
    }
}

export default SignUpPage;