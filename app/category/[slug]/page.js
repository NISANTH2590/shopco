"use client";

import BreadCrumbs from "@/components/bread-crumb";
import FilterComponent from "@/components/filterComponent";
import UsePagination from "@/components/hooks/usePagination";
import ProductLayout from "@/components/layouts/product-layout";
import styles from '@/styles/pages/category-page.module.scss'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const CategoryPage = ({ params: { slug } }) => {

    const productsData = [
        {
            name: "T-SHIRT WITH TAPE DETAILS",
            rating: 4.5,
            color: "black",
            originalPrice: 180,
            discountPrice: 160,
            img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/1.png?alt=media&token=802138bd-b9ce-42f3-9595-4f74e06dc657"
        },
        {
            name: "SKINNY FIT JEANS",
            rating: 4,
            color: "red",
            originalPrice: 280,
            discountPrice: 220,
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
            originalPrice: 120,
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
            color: "black",
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
            name: "9 SKINNY FIT JEANS",
            rating: 4,
            originalPrice: 280,
            discountPrice: 0,
            img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
        },
        {
            name: "2 T-SHIRT WITH TAPE DETAILS",
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
            color: "red",
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
            color: "black",
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
            color: "red",
            size: "Large",
            originalPrice: 280,
            discountPrice: 210,
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
            size: "Large",
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
            color: "black",
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
            color: "black",
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
            color: "red",
            originalPrice: 280,
            discountPrice: 240,
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
            color: "red",
            originalPrice: 280,
            discountPrice: 270,
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
            color: "black",
            discountPrice: 0,
            img_url: "https://firebasestorage.googleapis.com/v0/b/shopco-999c9.appspot.com/o/2.png?alt=media&token=aa4ab406-6cd7-4663-a085-5921a2372185"
        },
    ];


    let options = [
        { label: "Most Popular", value: "popular" },
        { label: "Most Cheaper", value: "cheaper" },
        { label: "Most Costlier", value: "costlier" }
    ];

    let initialData = 0;
    let totalDataToBeDisplayed = 9;
    let [start, setStart] = useState(initialData);
    let [end, setEnd] = useState(totalDataToBeDisplayed);

    const pathName = usePathname();
    const categoryPage = pathName.includes('category');

    const [data, setData] = useState(productsData);
    const [paginatedData, setPaginatedData] = useState(data.slice(0, totalDataToBeDisplayed));
    const [selectedColorFilter, setSelectedColorFilter] = useState(false);
    const [selectedSizeFilter, setSelectedSizeFilter] = useState(false);
    const [selectedPriceFilter, setSelectedPriceFilter] = useState(false);
    const [sortFilter, setSortFilter] = useState(options[0]);
    let [mobileFilterVisibility, setMobileFilterVisiblility] = useState(false);


    useEffect(() => {
        // Disable scrolling when the animation is complete
        if (mobileFilterVisibility) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileFilterVisibility]);

    useEffect(() => {
        if (selectedColorFilter || selectedSizeFilter || selectedPriceFilter) {
            let datas = productsData.filter((data) => data.size == selectedSizeFilter || data.color == selectedColorFilter);
            setData(datas);
        }
        // setSortFilter(options[0])
    }, [selectedColorFilter, selectedSizeFilter, selectedPriceFilter]);

    useEffect(() => {
        if (sortFilter.value == "cheaper") {
            let sortedDatas = [...data].sort((obj1, obj2) => {
                if (obj1.discountPrice && obj2.discountPrice)
                    return obj1.discountPrice - obj2.discountPrice
                else if (obj1.discountPrice && !obj2.discountPrice)
                    return obj1.discountPrice - obj2.originalPrice
                else if (obj2.discountPrice && !obj1.discountPrice)
                    return obj2.discountPrice - obj1.originalPrice
                else
                    return obj1.originalPrice - obj2.originalPrice
            })
            setData(sortedDatas);
            // setPaginatedData(sortedDatas);
        }
        else if (sortFilter.value == "costlier") {
            let sortedDatas = [...data].sort((obj1, obj2) => {
                if (obj1.discountPrice && obj2.discountPrice)
                    return obj2.discountPrice - obj1.discountPrice
                else if (obj1.discountPrice && !obj2.discountPrice)
                    return obj2.originalPrice - obj1.discountPrice
                else if (obj2.discountPrice && !obj1.discountPrice)
                    return obj1.discountPrice - obj2.originalPrice
                else
                    return obj2.originalPrice - obj1.originalPrice
            })
            setData(sortedDatas);
            // setPaginatedData(sortedDatas);

        } else if (sortFilter.value == "popular") {
            let sortedDatas = [...data].sort((obj1, obj2) => {
                return obj2.rating - obj1.rating
            })
            setData(sortedDatas);
            // setPaginatedData(sortedDatas);
        }
    }, [sortFilter]);

    const nextButton = () => {
        if (start <= data.length && end <= data.length) {
            setStart(prev => prev += initialData + totalDataToBeDisplayed + 1);
            setEnd(prev => prev += totalDataToBeDisplayed + 1);
            let results = data.slice(start, end);
            // setPaginatedData(results);
        }
    }

    const prevButton = () => {
        if (start >= 0 && end >= 0) {
            setStart(prev => prev += initialData - totalDataToBeDisplayed - 1);
            setEnd(prev => prev += totalDataToBeDisplayed - 1);
            let results = data.slice(start, end);
            // setPaginatedData(results);
        }
    }

    return (
        <div className={styles.productListingPageLayout}>
            <BreadCrumbs />

            <div className={styles.productsLayoutWrapper}>
                {
                    categoryPage ?
                        !isMobile ? <FilterComponent setSelectedColorFilter={setSelectedColorFilter} setSelectedSizeFilter={setSelectedSizeFilter} setSelectedPriceFilter={setSelectedPriceFilter} /> : mobileFilterVisibility ? <FilterComponent setMobileFilterVisiblility={setMobileFilterVisiblility} setSelectedColorFilter={setSelectedColorFilter} setSelectedSizeFilter={setSelectedSizeFilter} setSelectedPriceFilter={setSelectedPriceFilter} /> : null
                        : null
                }
                <div className={styles.productsLayout}>
                    <ProductLayout setMobileFilterVisiblility={setMobileFilterVisiblility} cardClassName={'productListingPageCards'} titleClassName={'layoutListingTitle'} title={slug} totalProducts={data.length} inputs={paginatedData} initialData={totalDataToBeDisplayed} filters={true} actions={false} setSortFilter={setSortFilter} sortFilter={sortFilter} options={options} />
                    <UsePagination length={data.length}
                        postsPerPage={9}
                        prevButton={prevButton}
                        nextButton={nextButton}
                    // handlePagination={handlePagination} 
                    />
                </div>

            </div>
        </div>
    );
}

export default CategoryPage;
