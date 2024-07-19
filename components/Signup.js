import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import styles from "../styles/Signup.module.css";
import Image from "next/image";

function Signup() {
  const dispatch = useDispatch();

  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signupFirstname,
        username: signupUsername,
        password: signupPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: signupFirstname,
              username: signupUsername,
              token: data.token,
            })
          );
          // Le code en dessous c'est pour vider les champs après création de compte
          setSignupFirstname("");
          setSignupUsername("");
          setSignupPassword("");
        }
      });
  };

  return (
    <div className={styles.signUpContainer}>
      <Image src="/logotwitter.png" alt="logotwitter" width={80} height={80} />
      <h2>Create your Hackatweet account</h2>
      <input
        type="text"
        placeholder="Firstname"
        id="signupFirstname"
        onChange={(e) => setSignupFirstname(e.target.value)}
        value={signupFirstname}
      />
      <input
        type="text"
        placeholder="Username"
        id="signupUsername"
        onChange={(e) => setSignupUsername(e.target.value)}
        value={signupUsername}
      />
      <input
        type="password"
        placeholder="Password"
        id="signupPassword"
        onChange={(e) => setSignupPassword(e.target.value)}
        value={signupPassword}
      />
      <button id="register" onClick={() => handleRegister()}>
        Sign up
      </button>
    </div>
  );
}

export default Signup;
