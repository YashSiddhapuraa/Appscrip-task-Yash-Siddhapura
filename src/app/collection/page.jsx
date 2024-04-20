"use client"
import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import Image from "next/image";
import { arrowLeftIcon, arrowRightIcon } from "@/Assets/Icons";
import ProductList from "@/Components/ProductsList";
import { fetchData } from "../../../service/api";
import Sidebar from "@/Components/Sidebar";
import CustomSelect from "@/Components/CustomSelect";
import { filterOptions } from "@/Utils/constants";

const CollectionPage = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [productData, setProductData] = useState([])
  const toggle = () => {
    setShowFilter(!showFilter)
  }

  useEffect(() => {
    fetchData().then(e => { console.log(e); setProductData(e) });
  }, [])


  return <div className={styles.collectionPage}>

    <div className={styles.collectionHeroSection}>
      <h1 className={styles.collectionHeroTitle}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.collectionHeroDescription}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </div>

    <div className={styles.collectionsWrapper}>
      <div className={styles.collectionHeadBar}>
        <div className={styles.countAndToggle}>
          <div className={styles.items}>{productData.length ?? 0} ITEMS</div>
          <Image src={showFilter ? arrowLeftIcon : arrowRightIcon} />
          <div className={styles.filterText} onClick={() => toggle()}>{showFilter ? "HIDE FILTER" : "SHOW FILTER"}</div>
        </div>
        <div className={styles.filterBtn}>FILTER</div>
        <div className={styles.recommended}>
          <CustomSelect name="recommended" id="" options={filterOptions} />
        </div>
      </div>
      <div className={`${styles.collectionAndFilterWrapper} ${!showFilter && styles.filterHide}`}>
        {showFilter && <div className={styles.collectionFilter}>
          <Sidebar />
        </div>}
        <div className={styles.collection}>
          <ProductList products={productData} />
        </div>
      </div>
    </div>
  </div>;
};

export default CollectionPage;
