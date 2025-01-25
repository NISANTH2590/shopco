import styles from "@/styles/components/filter.module.scss"
import Image from "next/image";
import RangeSlider from 'react-range-slider-input';
import { useState } from "react"
import 'react-range-slider-input/dist/style.css';
import { isMobile } from "react-device-detect";

const FilterComponent = ({ setSelectedColorFilter, setMobileFilterVisiblility, setSelectedSizeFilter, setSelectedPriceFilter }) => {

    const filterDatas = {
        minPriceRange: 0,
        maxPriceRange: 250,
        dressTypeFilters: [
            "T-shirts",
            "Shorts",
            "Shirts",
            "Hoodie",
            "Jeans"
        ],
        colorsFilters: [
            "green",
            "red",
            "yellow",
            "orange",
            "lightblue",
            "darkblue",
            "violet",
            "pink",
            "white",
            "black"
        ],
        sizeFilters: [
            "XX-small",
            "X-small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "3X-Large",
            "4X-Large"
        ],
        dressStyleFilters: [
            "Casual",
            "Formal",
            "Party",
            "Gym"
        ]
    }

    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    const [price, setPrice] = useState(null);

    const applyFilters = () => {
        setSelectedColorFilter(color?.value);
        setSelectedSizeFilter(size?.value);
        setMobileFilterVisiblility(false)
        // setSelectedPriceFilter(price);
    }

    return (
        <>
            <div className={styles.filterLayout}>
                <div className={styles.filterHeadingSection}>
                    <p className={styles.filterHeading}>Filters</p>
                    {isMobile ? <Image onClick={() => setMobileFilterVisiblility(false)} alt="closeIcon" src={"/close.png"} width={15} height={15} /> : <Image alt="filterImage" src={"/filter.png"} width={15} height={15} />}
                </div>
                <div className={styles.horizontalLine} />
                <div className={styles.filters}>
                    {
                        filterDatas['dressTypeFilters'] ?
                            <div>
                                {
                                    filterDatas['dressTypeFilters'].map((filter, ind) => {
                                        return (
                                            <div key={ind} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', cursor: 'pointer' }}>
                                                <div className={styles.filterName}>
                                                    {filter}
                                                </div>
                                                <Image alt="rightArrow" src="/rightArrow.png" width={4} height={10} />
                                            </div>
                                        )
                                    })
                                }
                                <div className={styles.horizontalLine} />
                            </div>
                            : null
                    }
                    {
                        filterDatas['maxPriceRange'] || filterDatas['minPriceRange']
                            ?
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div className={styles.filterHeadingSection}>
                                    <p className={styles.filterHeading}>Price</p>
                                    <Image alt="upArrow" src={"/upArrow.png"} width={10} height={5} />
                                </div>
                                <RangeSlider className={styles.rangeSlider} min={filterDatas['minPriceRange']} max={filterDatas['maxPriceRange']} />
                                <div className={styles.horizontalLine} />
                            </div>
                            : null
                    }
                    {
                        filterDatas?.colorsFilters ?
                            <div className={styles.colorWrapper}>
                                <div className={styles.filterHeadingSection}>
                                    <p className={styles.filterHeading}>Colors</p>
                                    <Image alt="upArrow" src={"/upArrow.png"} width={10} height={5} />
                                </div>
                                {
                                    filterDatas?.colorsFilters.map((colorParams, ind) => {
                                        return (
                                            <div key={ind} onClick={() => setColor({ index: ind, value: colorParams })} className={ind == color?.index ? styles.selectedColorDiv : styles.colorDiv} style={{ backgroundColor: colorParams }}>
                                            </div>
                                        )
                                    })
                                }
                                <div className={styles.horizontalLine} />
                            </div> : null
                    }
                    {
                        filterDatas?.sizeFilters ?
                            <div className={styles.sizeFilterWrapper}>
                                <div className={styles.filterHeadingSection}>
                                    <p className={styles.filterHeading}>Size</p>
                                    <Image alt="upArrow" src={"/upArrow.png"} width={10} height={5} />
                                </div>
                                {
                                    filterDatas?.sizeFilters.map((sizeParam, ind) => {
                                        return (
                                            <div onClick={() => setSize({ index: ind, value: sizeParam })} className={ind == size?.index ? styles.selectedSize : styles.size} key={ind}>
                                                {sizeParam}
                                            </div>
                                        )
                                    })
                                }
                                <div className={styles.horizontalLine} />
                            </div> : null
                    }
                    {
                        filterDatas?.dressStyleFilters.length ?
                            <div className={styles.styleFilterWrapper}>
                                <div className={styles.filterHeadingSection}>
                                    <p className={styles.filterHeading}>Dress Style</p>
                                    <Image alt="upArrow" src={"/upArrow.png"} width={10} height={5} />
                                </div>
                                {
                                    filterDatas?.dressStyleFilters.map((style, ind) => {
                                        return (
                                            <div key={ind} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                                <div className={styles.style}>
                                                    {style}
                                                </div>
                                                <Image alt="rightArrow" src="/rightArrow.png" width={4} height={10} />
                                            </div>
                                        )
                                    })
                                }
                            </div> : null
                    }
                    <button className={styles.applyFilterButton} onClick={applyFilters}>
                        Apply Filter
                    </button>
                </div>
            </div>
        </>
    )
}

export default FilterComponent;