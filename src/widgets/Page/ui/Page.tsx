import styles from './Page.module.css';
import type { FC, ReactNode } from "react";

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page: FC<PageProps> = (props) => {

    const {children, className} = props

    return (
        <main
            className={`${styles.Page} ${className}`}
        >
            {children}
        </main>
    );
};
