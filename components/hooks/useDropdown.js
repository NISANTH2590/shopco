import Select from "react-select";
import '@/styles/utils.module.scss';
import { useEffect } from "react";


const UseDropDown = ({ options, value, setSelectedOption }) => {

    const reactSelectStyles = {
        control: (styles, { isDisabled, isFocused }) => {
            return {
                ...styles,
                borderColor: isFocused ? 'blue' : 'transparent',
                boxShadow: isFocused ? '0 0 0 1px blue' : 'none',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
            };
        },
        option: (styles, { isDisabled, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isSelected ? 'blue' : isDisabled ? 'lightgray' : 'transparent',
                color: isSelected ? 'white' : 'black',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
            };
        }
    };

    return (
        <Select
            defaultValue={value}
            onChange={setSelectedOption}
            options={options}
            styles={reactSelectStyles}
        />
    )
}

export default UseDropDown;