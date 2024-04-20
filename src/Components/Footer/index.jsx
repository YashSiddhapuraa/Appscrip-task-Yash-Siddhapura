import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { usIcon } from '@/Assets/Icons';
import { mediaLinks, museData, paymentMethods, quickLinks } from '@/Utils/constants';
import CustomSelect from '../CustomSelect';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerUpperSide}>
                <div className={styles.leftSide}>
                    <h3 className={styles.title}>Be the first to know</h3>
                    <p className={styles.subTitle}>Sign up for updates from mettā muse.</p>
                    <div className={styles.emailBtnWrapper}>
                        <input type="email" id='email' placeholder='Enter your e-mail...' className={styles.emailInput} required />
                        <button className={styles.subscribeBtn} >Subscribe</button>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.contactWrapper}>
                        <h3 className={styles.contactUsText}>CONTACT US</h3>
                        <p className={styles.contactNumber}>+44 221 133 5360</p>
                        <p className={styles.contactEmail}>customercare@mettamuse.com</p>
                    </div>

                    <div className={styles.currencyWrapper}>
                        <h3 className={styles.currencyText}>Currency</h3>
                        <div className={styles.currencyWithIcon}>
                            <Image src={usIcon} className={styles.currencyIcon} />
                            <div className={styles.square}></div>
                            <h3 className={styles.currencyName}>USD</h3>
                        </div>
                        <p className={styles.desc}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerLowerSide}>
                <div className={styles.lowerLeftSide}>
                    <div className={styles.linksWrapper}>
                        <h4 className={styles.linksTitle}>mettā muse</h4>
                        {museData.map((e, ind) => <div className={styles.link} key={ind}>{e.label}</div>)}
                    </div>
                    <div className={styles.linksWrapper}>
                        <h4 className={styles.linksTitle}>Quick Links</h4>
                        {quickLinks.map((e, ind) => <div className={styles.link} key={ind} >{e.label}</div>)}
                    </div>

                    <CustomSelect options={museData} classNameSelect={styles.CustomSelect} classNameOption={styles.options} />
                    <CustomSelect options={quickLinks} classNameSelect={styles.CustomSelect} classNameOption={styles.options} />
                </div>
                <div className={styles.lowerRightSide}>
                    <h3 className={styles.followUsText}>Follow Us</h3>
                    <div className={styles.allMediaLinks}>
                        {mediaLinks.map((e, ind) => <Image src={e} key={ind} className={styles.mediaLink} />)}
                    </div>
                    <div className={styles.paymentAcceptedWrapper}>
                        <h3 className={styles.paymentAcceptText}>mettā muse Accepts</h3>
                        <div className={styles.paymentCards}>{
                            paymentMethods.map((c, ind) => <Image src={c} key={ind} className={styles.paymentCard} />)
                        }</div>
                    </div>

                </div>
            </div>
            <div className={styles.allRightsText}>Copyright © 2023 mettamuse. All rights reserved.</div>
        </div>
    )
}

export default Footer