"use client"

import { usePathname } from "next/navigation";
import styles from '@/styles/components/bread-crumb.module.scss'
import Link from "next/link";

const BreadCrumbs = () => {

    const pathNames = usePathname().split('/');
    return (
        <div className={styles.breadCrumb}>
            {
                <Link href={'/home'} >Home</Link>
            }
            {
                pathNames.map((path, index) => {
                    return (
                        <div className={styles.subPathName} key={index}>
                            {path == "category" ? 'category' : !parseInt(path) ? <Link href={`/category/${path}`} >{path}</Link> : null}
                            &nbsp;
                            {
                                (!parseInt(path) && !parseInt(pathNames[index + 1])) && (index != pathNames.length - 1) ? `>` : null
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