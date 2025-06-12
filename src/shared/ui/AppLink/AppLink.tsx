import { Link, type LinkProps } from 'react-router-dom';
import styles from './AppLink.module.css';
import type { FC, ReactNode } from "react";


interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={`${styles.AppLink} ${className}`}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
