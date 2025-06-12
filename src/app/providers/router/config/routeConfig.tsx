import {
    AppRoutes,
    getRouteMain,
    getRouteNewsCreate,
    getRouteNewsDetails,
    getRouteNewsEdit
} from "../../../../shared/const/router.ts";
import { AddNewsPage } from "../../../../pages/AddNews/insex.ts";
import { NewsListPage } from "../../../../pages/NewsList/insex.ts";
import { NewsDetailsPage } from "../../../../pages/NewsDetails/insex.ts";
import type { AppRoutesProps } from "../../../../shared/types/router.ts";
import { EditNewsPage } from "../../../../pages/EditNews/insex.ts";

export const routeConfig: Record<(typeof AppRoutes)[keyof typeof AppRoutes], AppRoutesProps> = {
    [AppRoutes.NEWS]: {
        path: getRouteMain(),
        element: <NewsListPage />,
    },
    [AppRoutes.NEWS_CREATE]: {
        path: getRouteNewsCreate(),
        element: <AddNewsPage />,
    },
    [AppRoutes.NEWS_DETAILS]: {
        path: getRouteNewsDetails(':id'),
        element: <NewsDetailsPage />,
    },
    [AppRoutes.NEWS_EDIT]: {
        path: getRouteNewsEdit(':id'),
        element: <EditNewsPage />,
    },
};
