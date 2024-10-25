'use client';

import styles from './PageWrapper.module.scss';

type Props = React.HTMLAttributes<HTMLSelectElement> & {
    title?: string;
}

export const PageWrapper = ({ title, className, children, ...rest }: Props) => {
    return (
        <section className={`${styles['page-wrapper']} ${className}`} {...rest}>
            <h1 className={`${styles['page-wrapper__title']}`}>{title}</h1>
            {children}
        </section>
    )
}