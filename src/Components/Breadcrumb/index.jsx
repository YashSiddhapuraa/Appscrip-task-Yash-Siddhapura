import React from 'react';
import styles from './styles.module.scss';

const Breadcrumb = () => {
    return (
        <div className={styles.breadcrumpWrapper}>
            <div className={styles.mainLabel}>HOME</div>
            <div className={styles.divider}></div>
            <div className={styles.childLabel}>SHOP</div>
        </div>
    )
}

export default Breadcrumb