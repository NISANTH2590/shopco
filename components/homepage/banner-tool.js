import Link from "next/link";
import BannerCloseButton from "./banner-close-button";
import styles from "@/styles/components/homepage/banner-tool.module.scss";

const BannerTool = ({showDiscountBanner}) => (
  <div className={styles.bannerWrapper}>
    <div className={styles.bannerText}>
      Sign up and get 20% off to your first order.&nbsp;
      <Link className={styles.bannerLink} href={'/authentication/signup'}>Sign up Now</Link>
    </div>
    <div className={styles.bannerCloseButton}>
      <BannerCloseButton showDiscountBanner={showDiscountBanner} />
    </div>
  </div>
);

export default BannerTool;
