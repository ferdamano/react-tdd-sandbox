import { Component } from "react";

class SignUpPage extends Component {
    render(){
        return(
            <div>
                <h1 className="hello-world">Sign Up</h1>;
                <label>Username</label>
                <input placeholder="username" type="text" />
                <label>E-mail</label>
                <input placeholder="email" type="text" />
                <label>Password</label>
                <input placeholder="password" type="password"/>
                <label htmlFor="inputRepeat">Password Repeat</label>
                <input id="inputRepeat" type="password"/>
                <button disabled type="submit">Sign Up</button>
            </div>
        );
    }
}

export default SignUpPage;