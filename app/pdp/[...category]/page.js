'use client'

import BreadCrumbs from "@/components/bread-crumb";
import styles from "@/styles/pages/productDescriptionPage.module.scss";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '@/config/firebase';
import Image from 'next/image';
import TabContent from "@/components/pdp/TabContent";
import { useRouter } from "next/navigation";
import { CreateToast } from "@/components/utils/toast";
import Loader from "@/components/utils/loader";
import UseAuth from "@/components/hooks/useAuth";

const ProductDescriptionPage = ({ params }) => {
    const router = useRouter();
    const productId = params?.category[params?.category?.length - 1];
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const defaulRating = [1, 1, 1, 1, 1];
    const [defaultColor, setSelectedColor] = useState(null);
    const [defaultSize, setSelectedSize] = useState(null);
    const [quantity, setSelectedQuantity] = useState(1);
    const productSections = [{
        label: 'Product Details',
        api_key: 'product_details'
    },
    {
        label: 'Ratings & Reviews',
        api_key: 'reviews'
    },
    {
        label: 'FAQs',
        api_key: 'faqs'
    }];
    const [selectedSection, setSelectedSection] = useState(1);
    const [sectionData, setSectionData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    UseAuth();
    
    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, "brand-banner", productId);
                const result = (await getDoc(docRef)).data();
                console.log(result)
                setProduct(result);
                setLoading(false)
                if (result && result?.image_urls[0]) {
                    setSelectedImage(result?.image_urls[0]);
                    setSelectedSize(result?.defaultSize);
                    setSelectedColor(result?.defaultColor);
                    if (result[productSections[selectedSection].api_key].length) {
                        let results = selectedSection != 0 ? result[productSections[selectedSection].api_key]?.map((result) => { return JSON.parse(result) }) : result[productSections[selectedSection].api_key];
                        setSectionData(results);
                    }
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        fetchData();
    }, []);

    const decreaseQuantity = () => {
        if (quantity > 1)
            setSelectedQuantity(prev => prev - 1);
    };

    const increaseQuantity = () => {
        setSelectedQuantity(prev => prev + 1);
    };

    const changeSection = (index) => {
        setSelectedSection(index);
        let results = index != 0 ? product[productSections[index].api_key]?.map((result) => { return JSON.parse(result) }) : product[productSections[index].api_key];
        setSectionData(results);
    };

    const addItemToCart = async () => {
        let uid = localStorage.getItem("uid");
        if (uid) {
            let cartRef = doc(db, "cart", uid);
            try {
                await updateDoc(cartRef, {
                    cart_items: arrayUnion({
                        product_name: product.name,
                        product_color: defaultColor,
                        product_size: defaultSize,
                        product_quantity: quantity,
                        product_url: product.image_urls[0],
                        product_price: product?.discountPrice != 0 ? product?.discountPrice : product?.originalPrice
                    })
                });
                CreateToast('info', 'Item added to the cart');
                setTimeout(10000, router.push('/category/men'));
            } catch (Err) {
                CreateToast('error', 'Error in add the item to the cart');
            }
            console.log("i");
        }
    }

    return (
        <div>
            {
                isLoading ? <Loader /> :
                    <div className={styles.productDescriptionPageWrapper}>
                        <BreadCrumbs />
                        <div className={styles.productDescrptionWrapper}>
                            <div className={styles.productDescritionImages}>
                                <div className={styles.productDescriptionColumnImages}>
                                    {
                                        product?.image_urls?.map((image, ind) => {
                                            return (
                                                <div key={ind} className={styles.productionDescriptionImage}>
                                                    <Image onClick={() => setSelectedImage(image)} alt="productDescriptionPageImages" src={image} width={92} height={108} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.productSelectedImage}>
                                    {
                                        selectedImage && <Image alt="productDescriptionPageImages" src={selectedImage} width={302} height={326} />
                                    }
                                </div>
                            </div>
                            <div className={styles.productContent}>
                                <div className={styles.productName}>
                                    {product?.name}
                                </div>
                                <div className={styles.productRating}>
                                    {
                                        defaulRating.map((val, ind) => {
                                            const difference = product?.rating - ind;

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
                                        `${product?.rating}/5`
                                    }
                                </div>

                                <div className={styles.productPrice}>
                                    {
                                        product?.discountPrice ?
                                            <>
                                                <div className={styles.productDiscountPrice}>
                                                    ${product?.discountPrice}
                                                </div>
                                                <div className={styles.productActualPrice}>
                                                    ${product?.originalPrice}
                                                </div>
                                                <div className={styles.discountPercentage}>
                                                    {`-${product?.originalPrice - product?.discountPrice}%`}
                                                </div>
                                            </> :
                                            <div className={styles.productDiscountPrice}>
                                                ${product?.originalPrice}
                                            </div>
                                    }
                                </div>
                                <div className={styles.productDescription}>
                                    {product?.description}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.selectedColorsDiv}>
                                    <p className={styles.selectedColorsDivHeading}>Select Colors</p>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {
                                            product?.availableColors?.map((colorParams, ind) => {
                                                return (
                                                    <div key={ind} onClick={() => setSelectedColor(colorParams)} className={colorParams == defaultColor ? styles.selectedColorDiv : styles.colorDiv} style={{ backgroundColor: `#${colorParams}` }} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.selectedSizeDiv}>
                                    <p className={styles.selectedSizeDivHeading}>Choose Size</p>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {
                                            product?.availableSize?.map((sizeParam, ind) => {
                                                return (
                                                    <div onClick={() => setSelectedSize(sizeParam)} className={defaultSize == sizeParam ? styles.selectedSize : styles.size} key={ind}>
                                                        {sizeParam}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.productQuantityButtons}>
                                    <div className={styles.quantityButton}>
                                        <Image alt="minusIcon" onClick={decreaseQuantity} src={'/minusIcon.png'} width={12} height={2.5} />
                                        <div>{quantity}</div>
                                        <Image alt="plusIcon" onClick={increaseQuantity} src={'/plusIcon.png'} width={12} height={12} />
                                    </div>
                                    <div onClick={addItemToCart} className={styles.addToCartButton}>
                                        Add to Cart
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.productSections}>
                            {
                                productSections.map((section, index) => {
                                    return (
                                        <p key={index} style={{ color: index == selectedSection ? "black" : "" }} onClick={() => changeSection(index)} className={styles.sectionName}>{section.label}</p>
                                    )
                                })
                            }
                        </div>

                        <TabContent section={selectedSection} sectionData={sectionData} />
                    </div>
            }
        </div>
    )
}

export default ProductDescriptionPage;
