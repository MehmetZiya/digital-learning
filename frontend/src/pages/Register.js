import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import Modal from "../components/Modal";
import {useHistory} from "react-router-dom";
import "../scss/register.scss";

const REGISTER_INPUT = gql`
  mutation CreateUser($input: UserInput) {
    createUser(userInput: $input) {
      email
    }
  }
`;
const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        input: { name, surname, email, password },
      },
    });
    setModalOn(true);
  };
  
  const closeModal = () => {
    setModalOn(false);
    history.push("/login");

  }
  const [createUser, { data, loading, error }] = useMutation(REGISTER_INPUT);

  return (
    <Fragment>
      <form className="form-control" onSubmit={submitHandler}>
        <h2>Register</h2>
        <div className="form-input">
          <input
            type="text"
            id="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            id="surname"
            placeholder="surname"
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-action">
          <button className="btn" type="submit">
            Register
          </button>
          <div className="link">
            <span>Have an account? 👉🏻 </span>
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </form>
      {modalOn && (
        <Modal
          data={data}
          loading={loading}
          error={error}
          headerName={"Register"}
          onCloseModal={closeModal}
        />
      )}
    </Fragment>
  );
};

export default Register;
