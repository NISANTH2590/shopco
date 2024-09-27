import Select from "react-select";
import '@/styles/utils.module.scss';

const useDropDown = ({ options, value, setSelectedOption }) => {
    return (
        <>
            <Select
                defaultValue={value}
                onChange={setSelectedOption}
                options={options}
            />
        </>
    )
}

export default useDropDown;