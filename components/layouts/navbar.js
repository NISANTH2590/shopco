import Image from "next/image";
import styles from '@/styles/components/navbar.module.scss';
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const [input, setInput] = useState("");

    const router = useRouter();

    const onChangeInput = (event) => {
        setInput(event.target.value);
    }

    const searchInput = () => {
        // actions after searching the input
    }

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.mobileNavLeftItems}>
                <Image className={styles.hamBurgerIcon} src='/ham.png' width={18.75} height={14.25} alt="hamBurgerIcon" />
                <div className={styles.brandName}>
                    SHOP.CO
                </div>
            </div>
            <div className={styles.navItems}>
                <span style={{ 'cursor': 'pointer' }} >
                    Shop&nbsp;
                    <Image src='/downArrow.png' width={11.5} height={6.5} alt="downSelectionArrowIcon" />
                </span>
                <span style={{ 'cursor': 'pointer' }} >
                    On Sale
                </span>
                <span style={{ 'cursor': 'pointer' }} >
                    New Arrivals
                </span>
                <span style={{ 'cursor': 'pointer' }} >
                    Brands
                </span>
            </div>
            <div className={styles.searchBar}>
                <Image onClick={searchInput} style={{ 'cursor': 'pointer' }} src='/search.png' width={20.27} height={20.27} alt="searchBarIcon" />
                <input onChange={onChangeInput} placeholder="Search for products..." className={styles.searchBarInput} />
            </div>
            <div className={styles.navEndItems}>
                <Image style={{ 'cursor': 'pointer' }} src='/mobile_search.png' width={24} height={24} alt="mobileSearchIcon" />
                <Image style={{ 'cursor': 'pointer' }} onClick={() => router.push('/cart')} src='/cartIcon.png' width={24} height={24} alt="cartIcon" />
                <Image style={{ 'cursor': 'pointer' }} src='/profile.png' width={24} height={24} alt="profileIcon" />
            </div>
        </div>
    )
};

export default Navbar;
