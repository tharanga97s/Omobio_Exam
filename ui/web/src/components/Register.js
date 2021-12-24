import React, { useContext, useState } from "react";
import { MyContext } from "../ContextProvider/ContextProvider";
import "./login.css";
function Register() {
  const { toggleNav, registerUser } = useContext(MyContext);
  const initialState = {
    userInfo: {
      name: "",
      email: "",
      password: "",
    },
    errorMsg: "",
    successMsg: "",
  };
  const [state, setState] = useState(initialState);

  // On Submit the Registration Form
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await registerUser(state.userInfo);
    if (data.success) {
      setState({
        ...initialState,
        successMsg: data.message,
      });
    } else {
      setState({
        ...state,
        successMsg: "",
        errorMsg: data.message,
      });
    }
  };

  // On change the Input Value (name, email, password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Show Message on Success or Error
  let successMsg = "";
  let errorMsg = "";
  if (state.errorMsg) {
    errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if (state.successMsg) {
    successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  return (
    <div className="_loginRegister">
      <h1>Sign Up</h1>
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={submitForm} noValidate>
            <div className="form-control">
              <input
                name="name"
                required
                type="text"
                value={state.userInfo.name}
                onChange={onChangeValue}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-control">
              <input
                name="email"
                required
                type="email"
                value={state.userInfo.email}
                onChange={onChangeValue}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control">
              <input
                name="password"
                required
                type="password"
                value={state.userInfo.password}
                onChange={onChangeValue}
                placeholder="Enter your password"
              />
            </div>
            {errorMsg}
            {successMsg}
            <button type="submit">create</button>

            <p class="message">
              Already registered? <a onClick={toggleNav}>Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
