import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export interface CategoryType {
    id: string,
    name: string
}

export interface TechsType {
    name: string
}

export interface IdObject {
    id: string;
}

export interface MicroCMSIdsList {
    contents: Array<IdObject>
    totalCount: number
    offset: number
    limit: number
}

export interface BlogType {
    title:string;
    article:string;
    category:Array<CategoryType & MicroCMSListContent>
    thumbnail:MicroCMSImage
}

export interface WorkType {
    id:string
    title:string;
    summary:string;
    tags:Array<TechsType & MicroCMSListContent>
    thumbnail:MicroCMSImage
    blog: IdObject
    confidence:number
}
