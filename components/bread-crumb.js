"use client"

import { usePathname } from "next/navigation";
import styles from '@/styles/components/bread-crumb.module.scss'

const BreadCrumbs = () => {

    const pathNames = usePathname().split('/');

    return (
        <div className={styles.breadCrumb}>
            {
                `Home `
            }
            {
                pathNames.map((path, index) => {
                    return (
                        <div className={styles.subPathName} key={index}>
                            {!parseInt(path) ? path : null}
                            &nbsp;
                            {
                                (!parseInt(path)) && (index != pathNames.length - 1) ? `>` : null
                            }
                            &nbsp;
                        </div>
                    )
                }
                )
            }
        </div>
    )
}


export default BreadCrumbs;