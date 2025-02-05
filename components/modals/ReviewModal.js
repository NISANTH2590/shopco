'use client'
import { useState } from "react";
import Modal from "./Modal";
import styles from "@/styles/components/modal.module.scss"
import { CreateToast } from "../utils/toast";

const ReviewModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        CreateToast('info','Review posted')
        //need to update the reviews field into the firebase
        onClose(false); // Close the modal after submission
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Review">
            <form className={styles.reviewModal} onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '20px' }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '20px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '20px' }}>
                    <label>Comments:</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '20px' }}>
                    <label>Rating:</label>
                    <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => setRating(star)}
                                style={{ fontSize: '20px', marginLeft: '10px', cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                    <button className={styles.submitButton} type="submit">Submit Review</button>
                </div>
            </form>
        </Modal>
    );
};

export default ReviewModal;