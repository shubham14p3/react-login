import React, { Component } from "react";
import { connect } from "react-redux";
import { loginData } from "../../action";

class Login extends Component {
  state = {
    formControls: {
      email: {
        value: "",
      },
      password: {
        value: "",
      },
    },
  };

  componentDidMount() {
    this.props.loginData();
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.formControls.email.value;
    const password = this.state.formControls.password.value;

    // console.log("formValue", this.state.formControls.email.value);
    console.log(this.props.login.username);

    if (
      email === this.props.login.username &&
      password === this.props.login.password
    ) {
      alert("Login Successful");
      this.props.history.push("/dashboard");
    } else alert("please check credential");
  };

  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fillOpacity="1"
            d="M0,224L24,229.3C48,235,96,245,144,234.7C192,224,240,192,288,186.7C336,181,384,203,432,229.3C480,256,528,288,576,282.7C624,277,672,235,720,202.7C768,171,816,149,864,160C912,171,960,213,1008,240C1056,267,1104,277,1152,282.7C1200,288,1248,288,1296,256C1344,224,1392,160,1416,128L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>

        <div className="form-box">
          <h1 style={{ textAlign: "center" }}>LOGIN PAGE</h1>
          <form onSubmit={this.handleSubmit} autoComplete="on">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.formControls.email.value}
              onChange={this.changeHandler}
              placeholder="Enter Email"
              autoComplete="off"
              required
            />
            <label htmlFor="name">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.formControls.password.value}
              onChange={this.changeHandler}
              placeholder="Enter Password"
              autoComplete="off"
              required
            />
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login.login,
});

export default connect(mapStateToProps, { loginData })(Login);
