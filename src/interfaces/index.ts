import { ReactNode } from "react";

export interface RepositoryProps {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
}

export interface BlogProps extends RepositoryProps {}

export interface CardProps {
    data: RepositoryProps[] | undefined;
    children?: ReactNode;
}

export interface OpenSourceProps {}