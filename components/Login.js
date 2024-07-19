import styles from '../styles/Login.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Modal } from 'antd';


function Login() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  // const [isModalVisible, setIsModalVisible] = useState(false);
	const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
// 
  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({firstname:signUpFirstname, username:signUpUsername,token:data.token}));
					setSignUpFirstname('');
          setSignUpUsername('');
					setSignUpPassword('');
					
				}
			});
	};

  const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({firstname:signUpFirstname, username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({username:signInUsername, token:data.token}));
          setSignUpFirstname('');
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};

  // const showModal = () => {
	// 	setIsModalVisible(!isModalVisible);
	// };

	// let modalContent;
	// if (!user.token) {
	// 	modalContent = (
	// 		<div className={styles.registerContainer}>
	// 			<div className={styles.registerSection}>
	// 				<p>Sign-up</p>
	// 				<input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
  //         <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signInUsername} />
	// 				<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
	// 				<button id="register" onClick={() => handleRegister()}>Register</button>
	// 			</div>
  //     </div>
  //   );
  // }

  // let userSection;
	// if (user.token) {
	// 	userSection = (
  //     <div className={styles.logoutSection}>
  //       <p>Welcome {user.username} / </p>
  //       <button onClick={() => handleLogout()}>Logout</button>
  //     </div>
  //   );
	// } else {
	// 	if (isModalVisible) {
	// 		userSection = <FontAwesomeIcon icon={faXmark} onClick={() => showModal()} className={styles.userSection} />;
	// 	} else {
	// 		userSection = <FontAwesomeIcon icon={faUser} onClick={() => showModal()} className={styles.userSection} />;
	// 	}
	// }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerLeft}>
      <Image className={styles.logoLeft}  src="/logotwitter.png" alt="logotwitter"
      width={300}
      height={300} />
        </div>
        <div className={styles.containerRight}>
            <div className={styles.logoContainer}>
              <Image src="/logotwitter.png" alt="logotwitter"
              width={80}
              height={80}/>
            </div>
            <h1 className={styles.h1}>See what's happening</h1>
            <h2 className={styles.h2}>Join Hackatweet today.</h2>
            <button className={styles.buttonSignUp} onClick={() => handleRegister()}>Sign up</button>
            <h3 className={styles.h3}>Already have an account ?</h3>
            <button className={styles.buttonSignIn} onClick={() => handleConnection()} >Sign In</button>
        </div>
      </main>
    </div>
  );
}

export default Login;