import styles from '@/styles/components/footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import LatestOffers from '../latest-offers';

const footer_links = [
    {
        heading: 'COMPANY',
        links: [
            {
                label: "About",
                link: "/homepage"
            },
            {
                label: "Features",
                link: "/homepage"
            },
            {
                label: "Works",
                link: "/homepage"
            },
            {
                label: "Career",
                link: "/homepage"
            }
        ]
    },
    {
        heading: 'HELP',
        links: [
            {
                label: "Customer Support",
                link: "/homepage"
            },
            {
                label: "Delivery Details",
                link: "/homepage"
            },
            {
                label: "Terms & Conditions",
                link: "/homepage"
            },
            {
                label: "Privacy Policy",
                link: "/homepage"
            }
        ]
    },
    {
        heading: 'FAQ',
        links: [
            {
                label: "Account",
                link: "/homepage"
            },
            {
                label: "Manage Deliveries",
                link: "/homepage"
            },
            {
                label: "Orders",
                link: "/homepage"
            },
            {
                label: "Payments",
                link: "/homepage"
            }
        ]
    },
    {
        heading: 'Resources',
        links: [
            {
                label: "Free eBooks",
                link: "/homepage"
            },
            {
                label: "Development Tutorials",
                link: "/homepage"
            },
            {
                label: "How to - Blog",
                link: "/homepage"
            },
            {
                label: "Youtube Playlist",
                link: "/homepage"
            }
        ]
    }
]

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.latestOffersWrapper}>
                <LatestOffers />
            </div>
            <div className={styles.footerWrapper}>
                <div className={styles.footerTopContent}>
                    <div className={styles.about}>
                        <div className={styles.heading}>
                            SHOP.CO
                        </div>
                        <div className={styles.description}>
                            We have clothes that suits your style and which you're proud to wear. From women to men.
                        </div>
                        <div className={styles.links}>
                            <div className={styles.imageWrapper}>
                                <Image alt="twitter" className={styles.image} width={0} height={0} sizes='100vw' src={'/twitter.png'} />
                            </div>
                            <div className={styles.imageWrapper} style={{ backgroundColor: 'black' }}>
                                <Image alt="facebook" className={styles.image} width={0} height={0} sizes='100vw' src={'/facebook.png'} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image alt="instagram" className={styles.image} width={0} height={0} sizes='100vw' src={'/instagram.png'} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image alt="github" className={styles.image} width={0} height={0} sizes='100vw' src={'/github.png'} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerLinks}>
                        {
                            footer_links.map((link, ind) => {
                                return (
                                    <div key={ind} className={styles.footerLink}>
                                        <div className={styles.footerHeading}>
                                            {link.heading}
                                        </div>
                                        <div className={styles.footerSection}>
                                            {
                                                link.links.map((content, ind) => {
                                                    return (
                                                        <Link key={ind} className={styles.footerContent} href={content.link} >{content.label}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.horizontalLine} />
                <div className={styles.footerBottomContent}>
                    <div className={styles.copyRight}>
                        shop.co @ 2000-2021, All rights reserved
                    </div>
                    <div className={styles.footerImages}>
                        <Image alt='s' src={'/visa.png'} width={0} height={0} sizes='100vw' className={styles.footerImage} />
                        <Image alt='s' src={'/mastercard.png'} width={0} height={0} sizes='100vw' className={styles.footerImage} />
                        <Image alt='s' src={'/paypal.png'} width={0} height={0} sizes='100vw' className={styles.footerImage} />
                        <Image alt='s' src={'/applepay.png'} width={0} height={0} sizes='100vw' className={styles.footerImage} />
                        <Image alt='s' src={'/gpay.png'} width={0} height={0} sizes='100vw' className={styles.footerImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;