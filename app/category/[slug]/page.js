import BreadCrumbs from "@/components/bread-crumb";

import styles from '@/styles/pages/category-page.module.scss'

const CategoryPage = () => {
    return (
        <div className={styles.categoryPageLayout}>
            <BreadCrumbs />
            This is the category page
        </div>
    );
}

export default CategoryPage;
