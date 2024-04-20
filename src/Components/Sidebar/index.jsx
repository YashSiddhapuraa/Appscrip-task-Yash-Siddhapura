import React from 'react';
import styles from './styles.module.scss';
import Select from '../Select';
import { sidebarData } from '@/Utils/constants';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.checkbox}>
                <input type="checkbox" id='customize' />
                <label htmlFor="customize">Customizble</label>
            </div>
            {
                sidebarData.map((sideData, ind) => <Select heading={sideData.heading} options={sideData.options} key={ind} />)
            }
        </div>
    )
}

export default Sidebar