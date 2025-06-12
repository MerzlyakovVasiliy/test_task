import { type FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { NewsItem } from "../../models/types.ts";
import { addNews, editNews } from "../../models/newsSlice.ts";
import styles from "./NewsForm.module.css";
import { getRouteMain } from "../../../../shared/const/router.ts";
import { FaSave, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "../../../../shared/lib/hooks/useMediaQuery.ts";

interface NewsFormProps {
    initialData?: NewsItem;
}

export const NewsForm: FC<NewsFormProps> = (props) => {
    const { initialData } = props

    const [title, setTitle] = useState(initialData?.title || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [body, setBody] = useState(initialData?.body || "");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const isEdit = Boolean(initialData);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            title,
            description,
            body,
        };

        if (isEdit && initialData) {
            dispatch(editNews({ ...initialData, ...payload }));
        } else {
            dispatch(addNews(payload));
        }

        navigate(getRouteMain());
    };

    const handleCancel = () => {
        navigate(getRouteMain());
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
                <label className={styles.label}>Заголовок</label>
                <input
                    className={styles.input}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Описание</label>
                <input
                    className={styles.input}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Текст</label>
                <textarea
                    className={styles.textarea}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </div>
            <div className={styles.actions}>
                <div className={styles.actions}>
                    <button type="submit" className={styles.button}>
                        {isMobile ? <FaSave/> : isEdit ? "Сохранить" : "Добавить"}
                    </button>
                    <button type="button" className={styles.button} onClick={handleCancel}>
                        {isMobile ? <FaTimes/> : "Отмена"}
                    </button>
                </div>
            </div>
        </form>
    );
};
