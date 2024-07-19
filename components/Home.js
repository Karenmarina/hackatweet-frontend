import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from "./Tweet";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerLeft}>
          <div className={styles.logoContainer}>
            <Image
              src="/logotwitter.png"
              alt="logotwitter"
              width={60}
              height={60}
            />
          </div>
          <div className={styles.userContainer}>
            <div>
              <Image src="/drop2.png" alt="logouser" width={40} height={40} />
            </div>
            <div className={styles.userInfos}>
              <span className={styles.bodyBold}>John</span>
              <span>@JohnCena</span>
            </div>
          </div>
        </div>

        <div className={styles.containerCenter}>
          <div className={styles.inputContainer}>
            <h1 className={styles.h1}>Home</h1>
            <Tweet />
          </div>
          <div className={styles.lastTweetContainer}>{/* <LastTweet/> */}</div>
        </div>
        <div className={styles.containerRight}>
          <h1 className={styles.h1}>Trends</h1>
          <div className={styles.trendContainer}>{/* </Trend> */}</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
