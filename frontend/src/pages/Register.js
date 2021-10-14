import { useRef } from "react";
import { Link } from "react-router-dom";
import '../scss/register.scss';

const Register = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const userInputs = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(userInputs);
  };

  return (
    <form  className="form-control" onSubmit={submitHandler}>
        <h2>Register</h2>
      <div className="form-input">
        <input 
            type="text" 
            id="name" 
            placeholder="name" 
            ref={nameRef}
            required />
      </div>
      <div className="form-input">
        <input
          type="text"
          id="surname"
          placeholder="surname"
          ref={surnameRef}
          required />
      </div>
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
      <div className ="form-action">
        <button className="btn" type="submit">Register</button>
        <div className="link">
        <span>Have an accaount? 👉🏻  </span>
        <Link to="/login"> Login</Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
