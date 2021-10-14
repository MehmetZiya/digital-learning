
import { useRef } from "react";
import { Link } from "react-router-dom";
import '../scss/register.scss';

const Login = () => {
  
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userInputs = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(userInputs);
  };

  return (
    <form  className="form-control" onSubmit={submitHandler}>
        <h2>Login</h2>
      <div className="form-input">
        <input 
            type="email" 
            id="email" 
            placeholder="email" 
            ref={emailRef}
            required />
      </div>
      <div className="form-input">
        <input
          type="password"
          id="password"
          placeholder="password"
          ref={passwordRef}
          required />
      </div>
      <div className="form-action">
        <button className="btn" type="submit">Login</button>
        <div className="link">
        <span>Dont have an accaount? 👉🏻   </span>
        <Link to="/register">Register</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
