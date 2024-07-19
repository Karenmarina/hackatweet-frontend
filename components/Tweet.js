import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../reducers/user";
import styles from "../styles/Tweet.module.css";
import Image from "next/image";

function Tweet() {
  // Initialisation des états de l'input et du compteur
  const [tweet, setTweet] = useState("");
  // const [counter, setCounter] = useState(0);

  // Ajout du click
  // Console.log faudra le modifier pour ajouter le tweet dans last tweet
  const handleConnection = () => {
    console.log("click working");
  };

  // Modification du setter compteur

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="What's up ?"
          id="tweet"
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          maxLength="280"
          size="100"
          className={styles.defaultInput}
        />
      </div>
      <div className={styles.sendTweet}>
        <p>{tweet.length}/280</p>
        <button onClick={handleConnection} className={styles.buttonTweet}>
          Tweet
        </button>
      </div>
    </div>
  );
}

export default Tweet;
