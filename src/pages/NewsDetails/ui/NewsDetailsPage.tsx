import { Page } from "../../../widgets/Page/ui/Page.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks/redux.ts";
import { deleteNews } from "../../../features/news/models/newsSlice.ts";
import { getRouteMain, getRouteNewsEdit } from "../../../shared/const/router.ts";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import styles from './NewsDetailsPage.module.css'
import { useMediaQuery } from "../../../shared/lib/hooks/useMediaQuery.ts";

const NewsDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const news = useAppSelector((state) =>
        state.news.list.find((item) => item.id === id)
    );

    if (!news) return <div>Новость не найдена</div>;

    const handleDelete = () => {
        const confirmDelete = window.confirm("Удалить новость?");
        if (confirmDelete) {
            dispatch(deleteNews(news.id));
            navigate(getRouteMain());
        }
    };

    const handleEdit = () => {
        navigate(getRouteNewsEdit(news.id));
    };

    return (
        <Page>
            <div className={styles.page}>
                <h1 className={styles.title}>{news.title}</h1>
                <p className={styles.description}>{news.description}</p>
                <div className={styles.body}>{news.body}</div>

                <div className={styles.actions}>
                    <button
                        className={styles.editBtn}
                        onClick={handleEdit}
                        type="button"
                        aria-label="Редактировать новость"
                    >
                        {isMobile ? <FiEdit size={20}/> : "Редактировать"}
                    </button>
                    <button
                        className={styles.deleteBtn}
                        onClick={handleDelete}
                        type="button"
                        aria-label="Удалить новость"
                    >
                        {isMobile ? <FiTrash2 size={20}/> : "Удалить"}
                    </button>
                </div>
            </div>
        </Page>
    );
};

export default NewsDetailsPage;

