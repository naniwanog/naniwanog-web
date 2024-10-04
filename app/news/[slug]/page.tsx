import { getNewsDetail } from "@/app/_libs/microcms";
import { getNewsList } from "@/app/_libs/microcms";
import Article from "@/app/components/Article";
import ButtonLink from "@/app/components/ButtonLink";
import styles from "./page.module.css";


type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const newsList = await getNewsList();  
    return newsList.contents.map((news: { id: string }) => ({
        slug: news.id,
    }));
}

export default async function Page({params}:Props){
    const data = await getNewsDetail(params.slug)
    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    )
}