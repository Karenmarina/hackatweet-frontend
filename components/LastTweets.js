import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../reducers/user";
import styles from "../styles/LastTweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { useRouter } from 'next/router';

function LastTweets(props) {

    // État pour suivre si le tweet est liké ou non
    const [isLiked, setIsLiked] = useState(props.isLiked);

    // Fonction pour liker le tweet
    const handleLikeTweet = () => {

        // Inverse l'état isLiked
        setIsLiked(!isLiked);
    };

    // Style de l'icône coeur
    let heartIconStyle = { 'cursor': 'pointer' };
    if (isLiked) {
        heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
    }

      // Définir le compteur de likes
  const likeCount = isLiked ? 1 : 0;

    return (
        <div className={styles.card}>
            <div className={styles.userContainer}>
                <div className={styles.userIcon}><Image src="/drop2.png" alt="logouser"
                    width={40}
                    height={40} /></div>
                <span className={styles.bodyBold}>John</span>
                <span>@JohnCena</span>
            </div>
            <div className={styles.tweetText}>
                <span>Salut les petits loups #sucette</span>
                <span><FontAwesomeIcon icon={faHeart} onClick={() => handleLikeTweet()} style={heartIconStyle} className="like" /></span>
                <span> {likeCount}</span>
            </div>
        </div>
    );
}

export default LastTweets;