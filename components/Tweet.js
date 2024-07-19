// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../reducers/user";
import styles from "../styles/Tweet.module.css";
import Image from "next/image";


function Tweet() {

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

export default Tweet;