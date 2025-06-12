import { type FC } from 'react';
import styles from './Navbar.module.css';
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { getRouteNewsCreate, getRouteMain } from "../../../shared/const/router.ts";
import { useLocation } from "react-router-dom";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const location = useLocation();

    const isCreatePage = location.pathname === '/news/create';
    const isEditPage = location.pathname.endsWith('/edit');
    const isDetailsPage = location.pathname.includes('/news/details/');

    const hideButton = isCreatePage || isEditPage;

    return (
        <header className={`${styles.Navbar} ${className}`}>
            <div className={styles.wrapper}>
                {!hideButton && (
                    <AppLink
                        to={isDetailsPage ? getRouteMain() : getRouteNewsCreate()}
                        className={styles.createBtn}
                    >
                        {isDetailsPage ? 'Вернуться на главную' : 'Добавить новость'}
                    </AppLink>
                )}
            </div>
        </header>
    );
};
