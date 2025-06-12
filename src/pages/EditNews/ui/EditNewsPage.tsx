import { Page } from "../../../widgets/Page/ui/Page.tsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/providers/store/store.ts";
import { NewsForm } from "../../../features/news/insex.ts";


const EditNewsPage = () => {
    const { id } = useParams<{ id: string }>();

    const newsItem = useSelector((state: RootState) =>
        state.news.list.find(n => n.id === id)
    );

    if (!newsItem) return <Page>Новость не найдена</Page>;

    return (
        <Page>
            <NewsForm initialData={newsItem} />
        </Page>
    );
};

export default EditNewsPage;
