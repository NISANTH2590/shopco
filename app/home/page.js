import Footer from "@/components/layouts/footer";
import BrandBanner from "@/components/homepage/brand-banner";
import HeroSection from "@/components/homepage/hero-content";
import ProductLayout from "@/components/layouts/product-layout";
import styles from '@/styles/pages/homepage.module.scss';
import Image from "next/image";

const homepage = () => {

  const productsData = [
    {
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      originalPrice: 180,
      discountPrice: 160,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/1.png?alt=media&token=802138bd-b9ce-42f3-9595-4f74e06dc657"
    },
    {
      name: "SKINNY FIT JEANS",
      rating: 4,
      originalPrice: 280,
      discountPrice: 0,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
    {
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      originalPrice: 180,
      discountPrice: 160,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/1.png?alt=media&token=802138bd-b9ce-42f3-9595-4f74e06dc657"
    },
    {
      name: "SKINNY FIT JEANS",
      rating: 4,
      originalPrice: 280,
      discountPrice: 0,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
    {
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      originalPrice: 180,
      discountPrice: 160,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
    {
      name: "SKINNY FIT JEANS",
      rating: 4,
      originalPrice: 280,
      discountPrice: 0,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
    {
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      originalPrice: 180,
      discountPrice: 160,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
    {
      name: "SKINNY FIT JEANS",
      rating: 4,
      originalPrice: 280,
      discountPrice: 0,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
    {
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      originalPrice: 180,
      discountPrice: 160,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
    {
      name: "SKINNY FIT JEANS",
      rating: 4,
      originalPrice: 280,
      discountPrice: 0,
      img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
    },
  ];

  const commentsData = [
    {
      name: "Sarah M.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 1
    },
    {
      name: "Alex K.",
      description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 1
    },
    {
      name: "James L.",
      description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 1
    },
    {
      name: "Sarah M.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 2
    },
    {
      name: "Alex K.",
      description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 2
    },
    {
      name: "James L.",
      description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 2
    },
    {
      name: "Sarah M.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 3
    },
    {
      name: "Alex K.",
      description: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 3
    },
    {
      name: "James L.",
      description: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 3
    }
  ]

  return (
    <>
      <HeroSection />
      <BrandBanner />
      <ProductLayout titleClassName={'layoutProductTitle'} cardClassName={'productCards'} inputs={productsData} initialData={4} title={'NEW ARRIVALS'} filters={false} actions={false} moreButton={'View All'} />
      <ProductLayout titleClassName={'layoutProductTitle'} cardClassName={'productCards'} inputs={productsData} initialData={4} title={'TOP SELLING'} filters={false} actions={false} moreButton={'View All'} />

      <div className={styles.dressCategory}>
        <div className={styles.heading}>
          Browse By Dress Style
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardName}>
              Casual
            </div>
            <div className={styles.cardImage}>
              <Image className={styles.image} alt={'category1'} src={'/10.png'} width={0} height={0} sizes="100vw" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardName}>
              Formal
            </div>
            <div className={styles.cardImage}>
              <Image className={styles.image} alt={'category2'} src={'/12.png'} width={0} height={0} sizes="100vw" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardName}>
              Party
            </div>
            <div className={styles.cardImage}>
              <Image className={styles.image} alt={'category3'} src={'/11.png'} width={0} height={0} sizes="100vw" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImage}>
              <Image className={styles.image} alt={'category4'} src={'/13.png'} width={0} height={0} sizes="100vw" />
            </div>
            <div className={styles.cardName}>
              Gym
            </div>
          </div>

        </div>
      </div>

      <ProductLayout titleClassName={'layoutCommentsTitle'} cardClassName={'commentCards'} inputs={commentsData} initialData={2} title={'OUR HAPPY CUSTOMERS'} actions={true} />
    </>
  )
};

export default homepage;