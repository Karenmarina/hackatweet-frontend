//ajout Karen
import { useState } from "react";
import { Modal } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";
// Ajout Manuel
import styles from "../styles/Login.module.css";
import Image from "next/image";

function Login() {
  const [showSignIn, setShowSignIn] = useState(false); 
  const [showSignUp, setShowSignUp] = useState(false); 

  const openSignInModal = () => { setShowSignIn(true); }; 
  const openSignUpModal = () => { setShowSignUp(true); }; 
  const closeModal = () => { setShowSignIn(false); setShowSignUp(false); }; 

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerLeft}>
          <Image
            className={styles.logoLeft}
            src="/logotwitter.png"
            alt="logotwitter"
            width={300}
            height={300}
          />
        </div>
        <div className={styles.containerRight}>
          <div className={styles.logoContainer}>
            <Image
              src="/logotwitter.png"
              alt="logotwitter"
              width={80}
              height={80}
            />
          </div>
          <h1 className={styles.h1}>See what's happening</h1>
          <h2 className={styles.h2}>Join Hackatweet today.</h2>

          <button onClick={openSignUpModal} className={styles.buttonSignUp}>
            Sign up
          </button>

          {openSignUpModal && (
            <div id="react-modals">
              <Modal
                getContainer="#react-modals"
                className={styles.modal}
                visible={showSignUp}
                closable={false}
                footer={null}
                onCancel={closeModal}
              >
                {/* <FontAwesomeIcon
                  onClick={showModal}
                  className={styles.icon}
                  icon={faXmark}
                /> */}
                <Signup />
              </Modal>
            </div>
          )}
          <h3 className={styles.h3}>Already have an account ?</h3>
          <button onClick={openSignInModal} className={styles.buttonSignIn}>
            Sign In
          </button>
          {openSignInModal && (
            <div id="react-modals2">
              <Modal
                getContainer="#react-modals2"
                className={styles.modal2}
                visible={showSignIn}
                closable={false}
                footer={null}
                onCancel={closeModal}
              >
                {/* <FontAwesomeIcon
                  onClick={showModal}
                  className={styles.icon}
                  icon={faXmark}
                /> */}
                <Signin />
              </Modal>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Login;
