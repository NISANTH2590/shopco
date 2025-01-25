// "use client"
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/config/firebase";
// import { useEffect, useState } from "react";
import styles from '@/styles/components/homepage/brand-banner.module.scss'
import Image from 'next/image'

const BrandBanner = () => {

    // const [todos, setTodos] = useState([]);

    // const fetchBanner = async () => {

    //     await getDocs(collection(db, "brand-banner"))
    //         .then((querySnapshot) => {
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({ ...doc.data(), id: doc.id }));
    //             setTodos(newData);
    //         })

    // }

    // const brands = useEffect(() => {
    //     fetchBanner();
    // }, [])

    const banners = [
        "versace.png", "zara.png", "gucci.png", "prada.png", "calvinkelvin.png"
    ]

    return (
        <div className={styles.brandBanner}>
            {
                banners.map((path, id) => (
                    <div key={id} className={styles.bannerWrapper}>
                        <Image alt={path} width={0} height={0} sizes='100vw' src={`/${path}`} className={styles.banner} />
                    </div>
                ))
            }
        </div>
    )
}

export default BrandBanner;