export interface Work {
    id: number;
    title: string;
    description: string;
    role: string;
    url?:string;
    techStack: JSX.Element | JSX.Element[];
}