import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CreateToast } from "../utils/toast";

const UseAuth = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("uid");
        if (!token) {
            CreateToast('error', 'Token Expired')
            setTimeout(() => {
                router.push('/authentication/signin');
            }, 1000);
        }
        console.log("hi")
    }, [router]);
};

export default UseAuth;
