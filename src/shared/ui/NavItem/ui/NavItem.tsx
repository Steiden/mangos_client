'use client';

import { ReactNode } from 'react';
import styles from './HeaderItem.module.scss';

type Props = {
    children?: ReactNode;
    label: string;
    icon: string;
}

export const NavItem = ({ children, ...rest }: Props) => {
    return (
        <li className={`${styles['header-item']}`}>
            <span className={`${rest.icon} ${styles['header-item__icon']}`}></span>
            {rest.label}
        </li>
    )
}