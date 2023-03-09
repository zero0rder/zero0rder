import { ReactNode } from "react";

export interface RepositoryProps {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    image: string;
}

export interface BlogProps {}

export interface CardProps {
    data: RepositoryProps[] | undefined;
    children?: ReactNode;
}

export interface OpenSourceProps {}