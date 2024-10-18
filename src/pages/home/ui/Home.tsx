"use client";

import styles from "./Home.module.scss";

type Props = {}

export const Home = (props: Props) => {
    return (
        <section className={`${styles['welcome']}`}>
            <h1 className={`${styles['welcome__title']}`}>Welcome to Mangos</h1>
        </section>
    )
}