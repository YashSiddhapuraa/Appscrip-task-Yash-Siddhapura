"use client"
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { menuIcon } from '@/Assets/Icons';
import { tabs } from '@/Utils/constants';

const Menu = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }
    return (
        <div className={styles.menuWrapper}>
            <Image src={menuIcon} className={styles.menuIcon} onClick={() => toggle()} />

            {open &&
                <>
                    <div className={styles.menuDropDownWrapper}>{
                        tabs.map((e) => <div className={styles.tab}>{e}</div>)
                    }</div>
                    <Image src={menuIcon} className={styles.closeIcon} onClick={() => toggle()} />
                </>
            }
        </div>
    )
}

export default Menu