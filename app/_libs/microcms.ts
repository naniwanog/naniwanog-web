import { createClient } from "microcms-js-sdk"; 

import type {
    MicroCMSQueries, 
    MicroCMSListContent,
    MicroCMSImage,
} from "microcms-js-sdk";

export type Category = { name: string;
} & MicroCMSListContent;

export type News = {
    id: string; 
    title: string; 
    description: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    thumbnail?: MicroCMSImage;
    category: Category;
} & MicroCMSListContent;


if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error ("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error ("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY, 
}) ;

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>
    ({ 
        endpoint: "newslist", queries,
    })
    return listData;
};

export const getNewsDetail = async(
    contentId: string,
    queries?: MicroCMSQueries
)=>{
    const detailData = await client.getListDetail<News>({
        endpoint:"newslist",
        contentId,
        queries,
    })
    return detailData;
}