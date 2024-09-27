import useFirebaseAuth from "@/components/hooks/useFirebaseAuth";
import { createContext, useContext } from "react";

const AuthUserContext = createContext({
    user: null,
    loading: true,
    signInWithEmailAndPassword: async () => {},
    createUserWithEmailAndPassword: async () => {},
    signOut: async () => {}
})

export const AuthUserProvider = ({ children }) => {
    const user = useFirebaseAuth();
    return (
        <AuthUserContext.Provider value={user}>
            {children}
        </AuthUserContext.Provider>
    )
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(AuthUserContext);