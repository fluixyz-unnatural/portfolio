import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export interface CategoryType {
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