"use client";

import styles from '@/styles/components/product-layout.module.scss'
import ProductCard from '../product-card';
import Button from '../button';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import CommentCard from '../comment-card';
import useDropDown from '../hooks/useDropdown';

// import { useEffect, useState } from 'react';
// import { collection, getDocs } from "firebase/firestore";
// import { db } from '../config/firebase';

const ProductLayout = ({ initialData, title, titleClassName, cardClassName, inputs, actions, moreButton, filters }) => {

    let [initialDatas, setinitialDatas] = useState(initialData);
    let [datas, setLayoutDatas] = useState(inputs.slice(0, initialData));
    let [commentDatas, setCommentDatas] = useState(inputs.slice(0, initialData));
    let [start, setStartIndex] = useState(initialData);
    let [end, setEndIndex] = useState(inputs.length - 1);
    let [moreButtonVisibility, setMoreButtonVisibility] = useState(true);
    let [indexOne, setIndexOne] = useState(1);


    let options = [
        { label: "most popular", value: "popular" },
        { label: "most cheaper", value: "cheaper" },
        { label: "most costlier", value: "costlier" }
    ];

    let [filter, setFilter] = useState(options[0]);


    useEffect(() => {
        setLayoutDatas(inputs.slice(0, initialDatas))
    }, [initialDatas])

    // let [next, setNext] = useState(false)

    let updateDatas = () => {
        // console.log("initital datas 1", initialDatas);
        if (initialDatas >= inputs.length - initialDatas)
            setMoreButtonVisibility(false)

        setinitialDatas(initialDatas + initialDatas);

        // console.log("initital datas 2", initialDatas);
        // setLayoutDatas(datasData.slice(0, initialDatas))
    }

    const nextSlide = () => {

        if (start < inputs.length - 1) {
            setCommentDatas(inputs.slice(start, start + initialData))
            setStartIndex(start + initialData)
        } else {
            setStartIndex(initialData)
        }
        // setCommentDatas(pre => (pre + initialData <= n ? pre + initialData : initialData))
        // setNext(true)
        // return;
    }

    const prevSlide = () => {

        if (end > 0) {
            setCommentDatas(inputs.slice(end - initialData, end))
            setEndIndex(end - initialData)
        } else {
            setEndIndex(inputs.length - 1)
        }
        // setCommentDatas(pre => (pre - initialData > 0 ? pre - initialData : n))
        // setNext(false)
        // return;
    }

    // const [datas, setLayoutDatas] = useState([]);,proddatasDataucts
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             console.log("hi");
    //             const querySnapshot = await getDocs(collection(db, "brand-banner"));
    //             const newData = querySnapshot.docs.map((doc) => ({
    //                 ...doc.data(),
    //                 id: doc.id,
    //             }));
    //             setLayoutDatas(newData);
    //             console.log(datas);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     }

    // fetchData();
    //     return () => {
    //         // Cleanup code here (if necessary)
    //     };
    // }, []);

    return (
        <div className={styles.productLayoutWrapper} style={filters ? { "padding": "0px" } : null} >
            {
                title ?
                    filters ?
                        <div className={styles.productListingPageFilterSection}>
                            <div className={styles[titleClassName]} >
                                {title}
                            </div>
                            <div className={styles.displayedProductFilterSection}>
                                {/* <div className={styles.totalProductsSection}> */}
                                Showing {indexOne}-{indexOne + 9} of {inputs.length} Products
                                {/* </div> */}
                                <div className={styles.sortBySectionDesktop}>
                                    Sort by: <useDropDown setSelectedOption={setFilter} value={filter} options={options} />
                                </div>
                                <div className={styles.sortBySectionMobile}>
                                    <Image src={'/sortFilterMob.png'} width={13.5} height={12.5} alt='mob-filter' />
                                </div>
                            </div>
                        </div>
                        :
                        <div className={styles[titleClassName]} >
                            {title}
                            {
                                actions ?
                                    <div className={styles.actions} >
                                        <Image onClick={prevSlide} src={'/arrow-left.png'} width={24} height={24} alt='arrow-left' />
                                        <Image onClick={nextSlide} src={'/arrow-right.png'} width={24} height={24} alt='arrow-right' />
                                    </div> : null
                            }
                        </div> : null
            }
            {
                actions ?
                    <div className={styles[cardClassName]} >
                        {
                            commentDatas.map((comment, ind) => {
                                return (
                                    <CommentCard key={ind} name={comment.name} description={comment.description} rating={comment.rating} />
                                )
                            })
                        }
                    </div>
                    :
                    <div className={styles[cardClassName]} >
                        {
                            datas.map((product, ind) => {
                                return (
                                    <ProductCard productCardClassName={filters ? 'productListingCard' : 'productCard'} key={ind} productName={product.name} discountPrice={product.discountPrice} originalPrice={product.originalPrice} rating={product.rating} img_url={product.img_url} />
                                )
                            })
                        }
                    </div>
            }
            {
                moreButton && moreButtonVisibility ?
                    <div className={styles.moreProductsButton}>
                        <Button clickFunction={updateDatas} name={'View All'} color={'black'} backgroundColor={'white'} borderRadius={'25px'} border={'solid 2px #F0EEED'} width={'218px'} height={'52px'} />
                    </div> : null
            }
            {
                filters ?
                    <div className={styles.paginationWrapper}>
                    </div> : null
            }
        </div >
    )
};

export default ProductLayout;