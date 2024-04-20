import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';
import { LogoIcon, fourSquareIcon, heartIcon, menuIcon, profileIcon, searchIcon, shoppingBagIcon } from '@/Assets/Icons';
import { langOptions, tabs } from '@/Utils/constants';
import CustomSelect from '../CustomSelect';
import classNames from 'classnames';
import Breadcrumb from '../Breadcrumb';
import Menu from '../Menu';


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerTopBar}>
                {[1, 2, 3].map(() => <div className={styles.headerTopContent}>
                    <Image src={fourSquareIcon} className={styles.icon} />
                    <p className={styles.label}>Lorem ipsum dolor</p>
                </div>)}
            </div>
            <div className={styles.headerBottom}>
                <div className={styles.headerMiddleBar}>
                    <div className={classNames(styles.logoAndMenu, styles.sameHeadDiv)}>
                        <div className={styles.menu}><Menu /></div>
                        <Image src={LogoIcon} className={styles.logoIcon} />
                    </div>
                    <div className={classNames(styles.logoTitle, styles.sameHeadDiv)}>LOGO</div>
                    <div className={classNames(styles.actions, styles.sameHeadDiv)}>
                        <Image src={searchIcon} />
                        <Image src={heartIcon} />
                        <Image src={shoppingBagIcon} />
                        <Image src={profileIcon} className={styles.profileIcon} />
                        <CustomSelect options={langOptions} name="language" id="language" classNameSelect={styles.langSelect} />
                    </div>
                </div>
                <div className={styles.headerBottomBar}>
                    {
                        tabs.map((e) => <div className={styles.tab}>{e}</div>)
                    }
                </div>

                <div className={styles.breadCrumb}>
                    <Breadcrumb />
                </div>
            </div>
        </div>
    )
}

export default Header