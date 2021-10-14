
import { useRef } from "react";
import { Link } from "react-router-dom";
// import { useQuery, gql } from "@apollo/client";

import '../scss/register.scss';

/* const LOGIN_INPUT = gql`
  query Login($email: String! , $password: String!){
    login(email: $email, password: $password){
      token
    }
  }
`; */

const Login = () => {

  /* const [email , setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  const emailRef = useRef();
  const passwordRef = useRef();


  /* const { loading, error, data } = useQuery(LOGIN_INPUT , {
    variables : { email : emailRef.current.value, 
                  password : passwordRef.current.value
                },
  }); */

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if( email.trim().length === 0 || password.trim().length === 0 ) {
      return;
    }
    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `
    };
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          console.log(resData.data.login.token)
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <>
    <form  className="form-control" onSubmit={submitHandler}>
        <h2>Login</h2>
      <div className="form-input">
        <input 
            type="email" 
            id="email" 
            placeholder="email"
            ref = { emailRef }
            required />
      </div>
      <div className="form-input">
        <input
          type="password"
          id="password"
          placeholder="password"
          ref ={ passwordRef }
          required />
      </div>
      <div className="form-action">
        <button className="btn" type="submit" 
        >Login</button>
        <div className="link">
        <span>Dont have an accaount? 👉🏻 </span>
        <Link to="/register">Register</Link>
        </div>
      </div>
    </form>
    {/* { loading && <p>Loading...</p>}
    { error && <p>{error.message}</p>} */}
    </>
  );
}

export default Login;
