import styles from '@/styles/utils.module.scss';

const Input = ({ type, placeHolder, inputStyles, inputOnChange }) => {


    const onChange = (event) => {
        inputOnChange(event.target.value);
    }

    return (
        <input type={type} placeholder={placeHolder} onChange={onChange} style={inputStyles} className={styles.input}></input>
    )
}

export default Input;