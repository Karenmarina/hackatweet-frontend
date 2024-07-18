import styles from '../styles/Login.module.css';
import Image from 'next/image';

function Login() {
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
            <button className={styles.buttonSignUp}>Sign up</button>
            <h3 className={styles.h3}>Already have an account ?</h3>
            <button className={styles.buttonSignIn}>Sign In</button>
        </div>
      </main>
    </div>
  );
}

export default Login;