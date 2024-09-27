import BreadCrumbs from "@/components/bread-crumb";
import ProductLayout from "@/components/layouts/product-layout";
import styles from '@/styles/pages/category-page.module.scss'

const CategoryPage = ({ params: { slug } }) => {

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

    return (
        <div className={styles.productListingPageLayout}>
            <BreadCrumbs />
            <div className={styles.productsLayout}>
                <ProductLayout cardClassName={'productListingPageCards'} titleClassName={'layoutListingTitle'} title={slug} inputs={productsData} initialData={9} filters={true} actions={false} />
            </div>
        </div>
    );
}

export default CategoryPage;
