"use client"
import React, { useState } from "react";
import Image from "next/image";

import { arrowDownIcon, arrowUpIcon } from "@/Assets/Icons";

import styles from "./styles.module.scss";

const Select = ({ heading, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (optionValue) => {
        if (selectedOptions.includes(optionValue)) {
            setSelectedOptions(
                selectedOptions.filter((value) => value !== optionValue)
            );
        } else {
            setSelectedOptions([...selectedOptions, optionValue]);
        }
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const unselectAll = () => {
        setSelectedOptions([]);
    };

    return (
        <div className={styles.selectWrapper}>
            <div className={styles.selectHead}>
                <h3 onClick={() => toggleAccordion()}>{heading}</h3>
                <Image
                    src={isOpen ? arrowUpIcon : arrowDownIcon}
                    width={24}
                    height={24}
                    alt="arrow"
                    onClick={() => toggleAccordion()}
                />
            </div>
            <div className={styles.allText}>All</div>
            {isOpen && (
                <div>
                    <div className={styles.removeCheck} onClick={unselectAll}>
                        Unselect all
                    </div>
                    {options.map((option, ind) => (
                        <div className={styles.options} key={ind}>
                            <input
                                type="checkbox"
                                id={option.value}
                                value={option.value}
                                checked={selectedOptions.includes(option.value)}
                                onChange={() => handleOptionChange(option.value)}
                            />
                            <label htmlFor={option.value}>{option.label}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;
