import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import styles from "../styles/Signup.module.css";
import Image from "next/image";

function Signup() {
  const dispatch = useDispatch();

  const [signinUsername, setSigninUsername] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signinUsername,
        password: signinPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              username: signinUsername,
              token: data.token,
            })
          );
          // Le code en dessous c'est pour vider les champs après création de compte

          setSigninUsername("");
          setSigninPassword("");
        }
      });
  };

  return (
    <div className={styles.signUpContainer}>
      <Image src="/logotwitter.png" alt="logotwitter" width={80} height={80} />
      <h2>Connect to Hackatweet</h2>

      <input
        type="text"
        placeholder="Username"
        id="signinUsername"
        onChange={(e) => setSigninUsername(e.target.value)}
        value={signinUsername}
      />
      <input
        type="password"
        placeholder="Password"
        id="signinPassword"
        onChange={(e) => setSigninPassword(e.target.value)}
        value={signinPassword}
      />
      <button id="connection" onClick={() => handleConnection()}>
        Sign in
      </button>
    </div>
  );
}

export default Signup;
