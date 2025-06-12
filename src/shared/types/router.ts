import type { ReactNode } from "react";
import type { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
    path: string;
    element: ReactNode;
}
