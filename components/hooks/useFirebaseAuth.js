import { auth } from "@/config/firebase";

import {
    onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { createUserWithEmailAndPassword as _createUserWithEmailAndPassword, signInWithEmailAndPassword as _signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth";

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setLoading(false)
            return;
        }

        setLoading(true)

        var formattedUser = formatAuthUser(authState);

        setAuthUser(formattedUser);

        setLoading(false);

    };

    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    const signInWithEmailAndPassword = (email, password) =>
        _signInWithEmailAndPassword(auth, email, password);

    const createUserWithEmailAndPassword = (email, password) =>
        _createUserWithEmailAndPassword(auth, email, password);

    const signOut = () =>
        _signOut(auth).then(clear);

    const onAuthStateChanged = (cb) => {
        return _onAuthStateChanged(auth, cb);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        signOut,
        createUserWithEmailAndPassword
    };
}