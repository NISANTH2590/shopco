import styles from '@/styles/components/homepage/herosection.module.scss'
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className={styles.heroSectionWrapper}>
            <div className={styles.heroSectionBody}>
                <div className={styles.heroSection}>
                    <p className={styles.heading}>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </p>
                    <p className={styles.description}>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className={styles.heroSectionButton}>
                        Shop Now
                    </button>
                </div>
                <div className={styles.heroSectionBottom}>
                    <div className={styles.heroSectionBottomContent}>
                        <div className={styles.counts}>
                            200+
                        </div>
                        <div className={styles.countsName}>
                            International Brands
                        </div>
                    </div>
                    <div className={styles.heroSectionBottomContent}>
                        <div className={styles.counts}>
                            2,000+
                        </div>
                        <div className={styles.countsName}>
                            High-Quality Products
                        </div>
                    </div>
                    <div className={styles.heroSectionBottomContent}>
                        <div className={styles.counts}>
                            30,000+
                        </div>
                        <div className={styles.countsName}>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.heroSectionImageWrapper}>
                <Image className={styles.heroSectionImage} height={0} width={0} sizes="100vw" alt='heroImageIcon' src='/homeHero.jpg'></Image>
            </div>
        </div>
    )
}

export default HeroSection;