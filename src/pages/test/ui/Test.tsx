'use client';

import styles from "./Test.module.scss";

type Props = {}

export const Test = (props: Props) => {
    return (
        <div className={`${styles['test']}`}>
            <h1 className={`${styles['test__title']}`}>Test page</h1>
        </div>
    )
}