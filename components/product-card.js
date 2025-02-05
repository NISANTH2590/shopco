'use client'

import styles from '@/styles/components/product-card.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const defaulRating = [1, 1, 1, 1, 1];

const ProductCard = ({ productCardClassName, productName, discountPrice, originalPrice, rating, img_url }) => {
    const router = useRouter();
    const productPageRedirection = (id) => {
        router.push(`/pdp/Men/T-shirts/${id}`);
    }

    return (
        <div className={styles[productCardClassName]} >
            <div className={styles.productImageWrapper}>
                <Image onClick={() => productPageRedirection('product8')} className={styles.productImage} alt='i' src={img_url} width={0} height={0} sizes='100vw' />
            </div>
            <div className={styles.productContent}>
                <div className={styles.productName}>
                    {productName}
                </div>
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
                    &nbsp;
                    {
                        `${rating}/5`
                    }
                </div>

                <div className={styles.productPrice}>
                    {
                        discountPrice ?
                            <>
                                <div className={styles.productDiscountPrice}>
                                    ${discountPrice}
                                </div>
                                <div className={styles.productActualPrice}>
                                    ${originalPrice}
                                </div>
                                <div className={styles.discountPercentage}>
                                    {`-${originalPrice - discountPrice}%`}
                                </div>
                            </> :
                            <div className={styles.productDiscountPrice}>
                                ${originalPrice}
                            </div>
                    }
                </div>
            </div>
        </div >
    )
};

export default ProductCard;