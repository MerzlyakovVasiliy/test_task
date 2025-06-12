
import styles from "./NewsCard.module.css";
import { AppLink } from "../../../../shared/ui/AppLink/AppLink.tsx";
import type { NewsItem } from "../../models/types.ts";
import { getRouteNewsDetails } from "../../../../shared/const/router.ts";
import type { FC } from "react";


const NewsCard: FC<NewsItem> = (props) => {

    const {
        title,
        description,
        id,
        body
    } = props;

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.bodyPreview}>{body}</p>
            <AppLink to={getRouteNewsDetails(id)} className={styles.button}>
                Читать далее →
            </AppLink>
        </div>
    );
};

export default NewsCard;
