import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  // const { login } = useContext(AuthContext);
  const handleSubmit = async (e) => {

    e.preventDefault();
    const email = "abcd123@gmail.com";
    const password="abcd1234";
    try {
await signInWithEmailAndPassword(auth, email, password);
        console.log('Loggedin');
        // navigate("/");
        //location.reload();
    }
    catch (error) {
      console.log(error)
    }
}

  // const handleLogin = () => {
  //   login();
  // };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
