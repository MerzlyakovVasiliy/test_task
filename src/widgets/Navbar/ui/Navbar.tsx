import { type FC } from 'react';
import styles from './Navbar.module.css';
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { getRouteNewsCreate } from "../../../shared/const/router.ts";
import { useLocation } from "react-router-dom";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {

    const {
        className
    } = props

    const location = useLocation();

    const hideButton =
        location.pathname === '/news/create' ||
        location.pathname.endsWith('/edit');

    return (
        <header className={`${styles.Navbar} ${className}`}>
            <div className={styles.wrapper}>
                {!hideButton && (
                    <AppLink
                        to={getRouteNewsCreate()}
                        className={styles.createBtn}
                    >
                        Добавить новость
                    </AppLink>
                )}
            </div>
        </header>
    );
}

