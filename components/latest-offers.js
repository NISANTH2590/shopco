import styles from '@/styles/components/latest-offers.module.scss'
import Image from 'next/image';

const LatestOffers = () => {
    return (
        <div className={styles.latestOffersWrapper}>
            <div className={styles.heading}>
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>
            <div className={styles.content}>
                <div className={styles.inputFieldWrapper}>
                    <Image style={{ objectFit: "cover" }} src={'/mailLetter.png'} width={20.25} height={15.75} alt='email' />
                    <input className={styles.inputField} type='email' placeholder='Enter your email address'></input>
                </div>
                <div className={styles.subscribeButtonWrapper}>
                    <button className={styles.subscribeButton}>Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    )
};

export default LatestOffers;