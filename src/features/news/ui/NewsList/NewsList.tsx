import { type FC } from "react";
import styles from "./NewsList.module.css";
import NewsCard from "../NewsCard/NewsCard";
import { useAppSelector } from "../../../../shared/lib/hooks/redux.ts";


const NewsList: FC = () => {

    const list = useAppSelector((state) => state.news.list)

    return (
        <div className={styles.list}>
            {list.map((item) => (
                <NewsCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    body={item.body}
                    id={item.id}
                />
            ))}
        </div>
    );
};

export default NewsList;
