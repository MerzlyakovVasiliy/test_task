export const AppRoutes = {
    NEWS: '/',
    NEWS_CREATE: 'news_create',
    NEWS_EDIT: 'news_edit',
    NEWS_DETAILS: 'news_details',
} as const;

export type RoutePath = string;

export const getRouteMain = (): RoutePath => '/';
export const getRouteNewsCreate = (): RoutePath => '/news/create';
export const getRouteNewsEdit = (id: string): RoutePath => `/news/${id}/edit`;
export const getRouteNewsDetails = (id: string): RoutePath => `news/${id}`;
