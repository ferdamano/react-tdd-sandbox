import { Component } from "react";

class SignUpPage extends Component {
    state = {
        disabled: true
    };

    pwListener = (callback, e) => {
        const { pw, repeatePw } = this.state;
        const pwValue = e.target.value;
        callback(pwValue);
        if(!!pwValue && !!repeatePw){
            if(pwValue === pw || pwValue === repeatePw){
                this.setState({disabled: false});
            }
        }
        
    }

    render(){
        return(
            <div>
                <h1 className="hello-world">Sign Up</h1>;
                <label>Username</label>
                <input placeholder="username" type="text" />
                <label>E-mail</label>
                <input placeholder="email" type="text" />
                <label htmlFor="inputPassword">Password</label>
                <input id="inputPassword" type="password" onKeyUp={this.pwListener.bind(this,(val) => {this.setState({pw: val})})}/>
                <label htmlFor="repeatInputPassword">Password Repeat</label>
                <input id="repeatInputPassword" type="password" onKeyUp={this.pwListener.bind(this, (val)=>{this.setState({repeatePw: val})})}/>
                <button disabled={this.state.disabled} type="submit">Sign Up</button>
            </div>
        );
    }
}

export default SignUpPage;