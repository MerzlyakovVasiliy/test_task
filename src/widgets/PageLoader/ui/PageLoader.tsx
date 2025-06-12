import styles from './PageLoader.module.css';
import { Loader } from "../../../shared/ui/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={`${styles.PageLoader} ${className}`}>
        <Loader />
    </div>
);
