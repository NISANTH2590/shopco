"use client"
import Image from "next/image";

const BannerCloseButton = ({ showDiscountBanner }) => {

  function setUserStastics() {
    localStorage.setItem('offer-discount-banner', new Date().getTime());
    showDiscountBanner(false);
  }

  return (
    <>
      <Image width={15} height={15} src="/Vector.png" alt="closebutton" onClick={() => setUserStastics()} />
    </>
  );
};

export default BannerCloseButton;
