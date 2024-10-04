import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import {News} from "@/app/_libs/microcms";
import Date from "../Date"

type Props = {
    news: News[];
};

export default function NewsList({news}:Props){
    if (news.length === 0){
        return <p>記事がありません．</p>;
    }
    return(
        <ul>
        <h1 className={styles.head}>News</h1>
        <div className={styles.newslist}>
        {news.map((article)=>
            <li key={article.id} className={styles.list}>
                
                <Link href={`/news/${article.id}`} className={styles.link}>
                {article.thumbnail ? (
                    <Image 
                    src={article.thumbnail.url} 
                    alt=""
                    className={styles.image} 
                    width={article.thumbnail.width} 
                    height={article.thumbnail.height}
                    />
                ):(
                    <Image
                    className={styles.image}
                    src="/no-image.png"
                    alt="NO Image"
                    width={1200}
                    height={630}
                    />
                )}
                    <dl className={styles.content}>
                        <dt className={styles.title}>{article.title}</dt>
                        <dd className={styles.description}>{article.description}</dd>
                        <Date date = {article.publishedAt ?? article.createdAt} />
                    </dl>
                    
                </Link>
            </li>
        )}
        </div>
        </ul>
    )
}