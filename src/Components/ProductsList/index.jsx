import React from 'react';
import Product from '../Product';
import styles from './styles.module.scss';

const ProductList = ({ products }) => (

    <div className={styles.productList}>
        <div className={styles.products}>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    </div>
);

export default ProductList;