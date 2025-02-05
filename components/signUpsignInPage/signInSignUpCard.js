"use client";
import Input from '@/components/input';
import styles from '@/styles/components/signup-card.module.scss'
import Button from '@/components/button';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/context/authUserContext';
import { useRouter } from 'next/navigation';
import { CreateToast } from '../utils/toast';
import Cookies from "js-cookie";

const SignInSignUpCard = ({ slug }) => {

    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const router = useRouter();

    const inputBoxStyles = { 'padding': '10px', 'border': 'solid 1px #E8ECF0', 'borderRadius': '5px ' };

    const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = useAuth();

    const signUpOnSubmit = () => {

        if (passwordOne === passwordTwo) {
            createUserWithEmailAndPassword(email, passwordOne)
                .then(authUser => {
                    CreateToast('info', 'The user created in firebase');

                    if (rememberMe) {
                        Cookies.set("uid", authUser.user.uid);
                        Cookies.set("email", authUser.user.email);
                        Cookies.set("accessToken", authUser.user.stsTokenManager.accessToken);
                        setRememberMe(false);
                    } else {
                        localStorage.setItem("uid", authUser.user.uid)
                        localStorage.setItem("email", authUser.user.email);
                        localStorage.setItem("accessToken", authUser.user.stsTokenManager.accessToken);
                    }

                    let toastPop = setTimeout(() => {
                        CreateToast('info', 'Logged In');
                    }, 1500);
                    
                    router.push("/home");
                })
                .catch(error => {
                    CreateToast('error', 'Error in creating the user in firebase');
                });
        } else {
            CreateToast('error', 'Passwords do not match');
        }
    };

    const login = () => {
        signInWithEmailAndPassword(email, passwordOne).then(authUser => {

            if (rememberMe) {
                Cookies.set("uid", authUser.user.uid);
                Cookies.set("email", authUser.user.email);
                Cookies.set("accessToken", authUser.user.stsTokenManager.accessToken);
                setRememberMe(false);
            } else {
                localStorage.setItem("uid", authUser.user.uid)
                localStorage.setItem("email", authUser.user.email);
                localStorage.setItem("accessToken", authUser.user.stsTokenManager.accessToken);
            }

            let toastPop = setTimeout(() => {
                CreateToast('info', 'Logged In');
            }, 1500);

            router.push('/home');
        }).catch(error => {
            CreateToast('error', 'Error in Logging In');
        });
    }

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.brandName}>
                SHOP.CO
            </div>
            <p className={styles.welcomeText}>
                Welcome Back!
            </p>
            <Input inputOnChange={setEmail} type={'email'} placeHolder={'name@email.com'} inputStyles={inputBoxStyles} />
            <Input inputOnChange={setPasswordOne} type={'password'} placeHolder={'password'} inputStyles={inputBoxStyles} />
            {
                slug == "signup" ?
                    <Input inputOnChange={setPasswordTwo} type={'password'} placeHolder={'confirm password'} inputStyles={inputBoxStyles} />
                    : null
            }
            <div className={styles.rememberResetSection} >
                <div className={styles.rememberSection}>
                    <Input inputStyles={{ width: 'fit-content' }} inputOnChange={setRememberMe} type={'checkbox'} />
                    <span>Remember me</span>
                </div>
                {/* <div className={styles.forgotPassword}>
                    Forgot your password
                </div> */}
            </div>
            <Button backgroundColor={'black'} border={'none'} color={'white'} borderRadius={'5px'} name={slug == "signup" ? 'Sign up' : 'Sign in'} height={'40px'} clickFunction={slug == "signup" ? signUpOnSubmit : login} />
            <div className={styles.noAccountSection}>
                <span className={styles.noAccountText}>{slug != "signup" ? "Don't have an account" : "Already having an account"}&nbsp;&nbsp;</span>
                <Link style={{ 'textDecoration': 'underline', 'fontWeight': '900' }} className={styles.noAccountRedirection} href={slug == "signup" ? '/authentication/login' : '/authentication/signup'}>{slug == "signup" ? 'Login' : 'Signup'}</Link>
            </div>
        </div>
    )
}

export default SignInSignUpCard;