'use client';

import { useState } from 'react';
import styles from './HeaderProfile.module.scss';

export const HeaderProfile = () => {
    // const [user, setUser] = 

    return (
        <div className={`${styles['header-profile']}`}>
            <div className={`${styles['header-profile__image-container']}`}>
                <img src="" alt="" className={`${styles['header-profile__image']}`} />
                <span className={`${styles['hedaer-profile__initial']}`}>S</span>
            </div>
            <button className={`${styles['header-profile__button']}`}>
                <span className={`arrow_bold_icon ${styles['header-profile__button-icon']}`}></span>
            </button>
        </div>
    )
}