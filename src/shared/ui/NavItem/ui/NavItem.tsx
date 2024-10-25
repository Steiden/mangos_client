'use client';

import { ReactNode } from 'react';
import styles from './NavItem.module.scss';
import Link from 'next/link';

type Props = {
    children?: ReactNode;
    label: string;
    icon?: string;
    link: string;
}

export const NavItem = ({ children, ...rest }: Props) => {
    return (
        <Link href={rest.link}>
            <div className={`${styles['header-item']}`}>
                <span className={`${rest.icon} ${styles['header-item__icon']}`}></span>
                <span className={`${styles['header-item__text']}`}>{rest.label}</span>
            </div>
        </Link>
    )
}