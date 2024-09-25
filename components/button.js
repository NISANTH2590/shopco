import styles from '@/styles/components/button.module.scss';

const Button = ({ clickFunction, name, color, borderRadius, backgroundColor, width, height, border }) => {
    return (
        <button onClick={clickFunction} className={styles.button} style={{ color, backgroundColor, borderRadius, width, height, border }}>{name}</button>
    )
}

export default Button;