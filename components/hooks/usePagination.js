import styles from "@/styles/pages/category-page.module.scss"
import Image from "next/image";

const UsePagination = ({ postsPerPage, length, nextButton, prevButton }) => {
    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumbers.push(i);
    }

    return (
        <div className={styles.pagination}>
            <div onClick={prevButton} className={styles.paginationPreviousButton}>
                <Image height={12} width={12} alt="paginationLeftArrow" src={'/prevPaginationIcon.png'} />
                Previous
            </div>
            <div className={styles.paginationNumbers}>
                {
                    paginationNumbers.map((pageNumber) => (
                        <button key={pageNumber}>{pageNumber}</button>
                    ))
                }
            </div>
            <div onClick={nextButton} className={styles.paginationNextButton}>
                Next
                <Image height={12} width={12} alt="paginationRightArrow" src={'/nextPaginationIcon.png'} />
            </div>
        </div>
    );
};

export default UsePagination;