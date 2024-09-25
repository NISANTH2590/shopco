import styles from '@/styles/components/comment-card.module.scss';
import Image from 'next/image';

const defaulRating = [1, 1, 1, 1, 1];

const CommentCard = ({ rating, name, description }) => {

    return (
        <div className={styles.commentCard}>
            <div className={styles.productRating}>
                {
                    defaulRating.map((val, ind) => {
                        const difference = rating - ind;

                        if (difference > 0.6) {
                            return <Image alt='1' key={ind} src={`/ratingStar1.png`} className={styles.starImage} width={18.49} height={18.49} />;
                        } else if (difference === 0.5) {
                            return <Image alt='1' key={ind} src={'/ratingStar2.png'} className={styles.starImage} width={18.49} height={17.49} />;
                        }
                        return null;
                    })
                }
            </div>
            <div className={styles.author}>
                <div className={styles.authorName}>
                    {name}
                </div>
                <div>
                    <Image src={'/greenStar.png'} width={19.5} height={19.5} alt="verified" />
                </div>
            </div>
            <div className={styles.description}>
                "{description}"
            </div>
        </div>
    )
}

export default CommentCard;