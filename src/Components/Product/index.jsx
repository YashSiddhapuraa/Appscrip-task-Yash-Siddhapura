import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { heartIcon } from '@/Assets/Icons';

const Product = ({ product }) => (
    <div className={styles.product}>
        <div className={styles.productImgWrapper}>
            <Image width={200} height={200} src={product.image} alt={product.name} className={styles.productImg} />

        </div>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.descriptionAndfav}>
            <p className={styles.description}>{product.description}</p>
            <Image src={heartIcon} className={styles.favourite} />
        </div>
    </div>
);

export default Product;