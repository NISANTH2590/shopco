"use client"

import Loader from "@/components/utils/loader";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { CreateToast } from "@/components/utils/toast";
import styles from "@/styles/pages/cart-page.module.scss"
import BreadCrumbs from "@/components/bread-crumb";
import Image from "next/image";
import UseAuth from "@/components/hooks/useAuth";

const cartPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [cartItems, setCartItems] = useState(null);
    const [total, setTotal] = useState(0);

    const decreaseQuantity = (ind) => {
        let results = [...cartItems];
        if (results[ind]?.product_quantity > 1) {
            results[ind].product_quantity -= 1;
        }
        setCartItems(results);
        calculateTotalFare(results);
    };

    const increaseQuantity = (ind) => {
        let results = [...cartItems];
        if (results[ind]?.product_quantity < 50) {
            results[ind].product_quantity += 1;
        }
        setCartItems(results);
        calculateTotalFare(results);
    };

    const calculateTotalFare = (cartItems) => {
        let totalFare = 0;
        cartItems?.map((item) => {
            totalFare += (item?.product_price * item?.product_quantity);
        })
        setTotal(totalFare);
    }

    const deleteCartItem = (index) => {
        let results = cartItems.filter((_ele, ind) => ind != index);
        setCartItems(results);
        calculateTotalFare(results);
    }

    UseAuth();

    useEffect(() => {
        let uid = localStorage.getItem('uid');
        async function getDocs() {
            if (uid) {
                try {
                    let docRef = doc(db, 'cart', uid);
                    let results = (await getDoc(docRef)).data();
                    calculateTotalFare(results?.cart_items);
                    setCartItems(results?.cart_items);
                } catch (error) {
                    CreateToast('err', 'error in getting cart items');
                }
                setIsLoading(false);
            }
        }
        getDocs();
    }, [])

    return (
        <div>
            {
                isLoading ?
                    <Loader /> :
                    <div className={styles.cartWrapper}>
                        <div>
                            <BreadCrumbs />
                            <h1 className={styles.cartHeading}>YOUR CART</h1>
                        </div>
                        <div className={styles.cartItemsWrapper}>
                            <div className={styles.cartItems}>
                                {
                                    cartItems?.map((item, ind) => {
                                        return (
                                            <div key={ind} className={styles.cartItem}>
                                                <Image src={item.product_url} alt="cart item" width={124} height={124} />
                                                <div className={styles.cartItemDescription}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <p className={styles.productName}>{item.product_name}</p>
                                                        <Image onClick={() => deleteCartItem(ind)} alt="trashIcon" src={'/trashIcon.png'} width={12} height={14} />
                                                    </div>
                                                    <p className={styles.productSize}>Size: {item.product_size}</p>
                                                    <p className={styles.productColor}>Color: {item.product_color}</p>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <p className={styles.productPrize}>${item.product_price}</p>
                                                        <div className={styles.quantityButton}>
                                                            <Image alt="minusIcon" onClick={() => decreaseQuantity(ind)} src={'/minusIcon.png'} width={12} height={2.5} />
                                                            <div>{item.product_quantity}</div>
                                                            <Image alt="plusIcon" onClick={() => increaseQuantity(ind)} src={'/plusIcon.png'} width={12} height={12} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.orderSummaryWrapper}>
                                <p className={styles.orderSummaryHeading}>Order Summary</p>
                                <div className={styles.subTotal}>
                                    <label>Subtotal</label>
                                    <label>${total}</label>
                                </div>
                                <div className={styles.discount}>
                                    <label>Discount</label>
                                    <label>${0}</label>
                                </div>
                                <div className={styles.deliveryFee}>
                                    <label>Delivery Fee</label>
                                    <label>${15}</label>
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.totalPrice}>
                                    <label>Total</label>
                                    <label>${total}</label>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
};

export default cartPage;
