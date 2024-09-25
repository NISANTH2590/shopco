import SignUpSignInCard from '@/components/signUpsignInPage/signInSignUpCard';
import styles from '@/styles/components/product-layout.module.scss'

const SignUpSignInPage = ({ params: { slug } }) => {
    return (
        <div className={styles.signupLayoutWrapper}>
            <SignUpSignInCard slug={slug} />
        </div>
    )
};

export default SignUpSignInPage;