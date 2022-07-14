import { Component } from "react";
import axios from "axios";

class SignUpPage extends Component {
    state = {
        disabled: true,
        username: '',
        email: '',
        password: '',
        value: '',
        loading: false
    };

    onChangeRepeat = (e) => {
        const value = e.target.value;
        this.setState({disabled: this.state.password != value});
    }

    onChangeField = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        const body = {
            username,
            email,
            password
        }
        this.setState({loading: true});
        // axios.post("/api/1.0/users", body);
        fetch("/api/1.0/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <h1 className="hello-world">Sign Up</h1>
                    <label htmlFor="inputUsername">Username</label>
                    <input id="inputUsername" onChange={this.onChangeField} placeholder="username" type="text" name="username" />
                    <label htmlFor="inputEmail">E-mail</label>
                    <input id="inputEmail" onChange={this.onChangeField} name="email" placeholder="email" type="text" />
                    <label htmlFor="inputPassword">Password</label>
                    <input id="inputPassword" type="password" name="password" onChange={this.onChangeField}/>
                    <label htmlFor="repeatInputPassword">Password Repeat</label>
                    <input id="repeatInputPassword" type="password" onChange={this.onChangeRepeat}/>
                    <button onClick={this.submit} disabled={ this.state.disabled || this.state.loading } type="submit">
                        {(this.state.loading) ? (<i className="fa-solid fa-spinner fa-spin"></i>) : "Sign Up"}
                    </button>
                </form>
            </div>
        );
    }
}

export default SignUpPage;