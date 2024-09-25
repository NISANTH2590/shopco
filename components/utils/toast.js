import { Slide, toast } from 'react-toastify';

export const CreateToast = (purpose, message) => {
    if (purpose === 'info') {
        toast(message, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            style: { backgroundColor: 'lightgreen', color: 'white' },
            transition: Slide,
        })
    }
    else if (purpose === 'error') {
        toast.error(message, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        })
    }
}