import { Page } from "../../../widgets/Page/ui/Page.tsx";
import { NewsForm } from "../../../features/news/insex.ts";

const AddNewsPage = () => {
    return (
        <Page>
            <h1>Добавление новости</h1>
            <NewsForm />
        </Page>
    );
};

export default AddNewsPage;
