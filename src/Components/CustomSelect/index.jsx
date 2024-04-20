import React from 'react';
import styles from './styles.module.scss';

const CustomSelect = ({ name, id, classNameSelect, classNameOption, options = [] }) => {
    return (
        <select name={name} id={id} className={`${styles.select} ${classNameSelect}`}>
            {
                options.map((e, ind) => <option
                    value={e.value}
                    key={ind}
                    className={`${styles.option} ${classNameOption}`}>
                    {e.label}
                </option>
                )
            }
        </select>
    )
}

export default CustomSelect