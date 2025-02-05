'use client'
import styles from "@/styles/pages/productDescriptionPage.module.scss";
import { useRef } from 'react';

const FaqCard = ({ question, answer }) => {

    const questionRef = useRef(null);

    const viewAnswer = () => {
        if (questionRef.current)
            questionRef.current.classList.toggle(styles.displayAnswer)
    }

    return (
        <div className={styles.accordion}>
            <div onClick={viewAnswer} className={styles.question}>
                {question}
            </div>
            <div ref={questionRef} className={styles.answer}>
                {answer}
            </div>
        </div>
    )
};

export default FaqCard;