import { useContext, useState } from "react";
import { AuthContext } from "../App";
import firebase from "firebase/app";
import { Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "firebase/analytics";
import "firebase/auth";


function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
        setLoading(false);

      })
      .catch((e) => {
        setErrors(e.message);
        setLoading(false);
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((res) => {
            if (res.user) Auth.setLoggedIn(true);
          })
          .catch((e) => setErrors(e.message));
      });
  };

  const logout = () => {
    firebase.auth().signOut();
    Auth.setLoggedIn(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
        />
        <hr />
        {Auth.isLoggedIn ? (
          <div>
            <button onClick={() => logout()}>Logout</button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => signInWithGoogle()}
              className="googleBtn"
              type="button"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="logo"
              />
              Login With Google
            </button>
            <br />
            <br />
            
            <button type="submit">
              {loading ? <Spinner animation="border" role="status"/> : "Login"}
            </button>
          </div>
        )}

        <span>{error}</span>
      </form>
    </div>
  );
}

export default Login;