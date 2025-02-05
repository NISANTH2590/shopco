'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "@/styles/pages/productDescriptionPage.module.scss"
import UseDropDown from '../hooks/useDropdown';
import { isMobile } from 'react-device-detect';
import CommentCard from '../comment-card';
import FaqCard from '../faqCard';
import ReviewModal from '../modals/ReviewModal';

const TabContent = ({ section, sectionData }) => {

    const filterOptions = [{ label: "Latest", value: "latest" }, { label: "Ratings", value: "ratingAsc" }];
    const [filter, setSelectedFilter] = useState(filterOptions[0]);
    const [tabSection, setTabSection] = useState(null);
    const [tabSectionData, setTabSectionData] = useState(null);
    const [tabSectionSlicedData, setTabSectionSlicedData] = useState(null);
    const datasLimit = isMobile ? 4 : 9;
    const [initialDatas, setInitialDatas] = useState(isMobile ? 4 : 9);
    const [isReviewModalVisible, setReviewModalVisible] = useState(false);

    useEffect(() => {
        setTabSection(section);
        if (sectionData?.length > datasLimit)
            setInitialDatas(datasLimit);
    }, [section]);

    useEffect(() => {
        setTabSectionData(sectionData);
        if (section > 0) {
            setTabSectionSlicedData(sectionData?.slice(0, datasLimit));
        }
    }, [sectionData]);


    useEffect(() => {
        if (section > 0)
            setTabSectionSlicedData(sectionData?.slice(0, initialDatas));
    }, [initialDatas]);

    const incrementDatas = () => {
        setInitialDatas(prev => prev + datasLimit);
    }

    const writeReview = () => {
        setReviewModalVisible(true);
    }

    const displaySections = (index) => {
        switch (index) {
            default:
                return <div dangerouslySetInnerHTML={{ __html: tabSectionData }} />;
            case 1:
                return tabSectionSlicedData.map((section, ind) =>
                    <CommentCard date={section.review_posted_date} description={section.product_feedback} name={section.customer_name} rating={section.product_rating} key={ind} />
                );
            case 2:
                return tabSectionSlicedData.map((section, ind) =>
                    <FaqCard question={section.question} answer={section.answer} key={ind} />
                );
        }
    }
    return (
        <div>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionHeading}>
                    {tabSection != 0 ? "All Reviews" : "Additional Information"}
                    {tabSection != 0 && tabSectionData && <span className={styles.noOfDatas}>&nbsp;({tabSectionData.length})</span>}
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Image alt='filterImage' height={14} width={14} src={'/filter.png'} />
                    {!isMobile ? <UseDropDown setSelectedOption={setSelectedFilter} value={filter} options={filterOptions} /> : null}
                    <button onClick={writeReview} className={styles.reviewButton}>Write a Review</button>
                </div>
            </div>
            <div className={styles.sectionContent}>
                <div className={styles.sectionContentDatas}>
                    {
                        tabSectionSlicedData && (
                            displaySections(tabSection)
                        )}
                </div>
                <div className={styles.loadMoreButton}>
                    {
                        (tabSection != 0 && tabSectionData && initialDatas <= tabSectionData?.length) ?
                            <button onClick={incrementDatas}>Load More</button>
                            : null
                    }
                </div>
            </div>
            {isReviewModalVisible && <ReviewModal isOpen={isReviewModalVisible} onClose={setReviewModalVisible} />}
        </div>
    )
};

export default TabContent;