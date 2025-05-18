import Container from "@/components/Container";
import { List, ListItem } from "@/components/List";

export default function Page() {
    const title = "Naniwa NOG とは"
    const description = (
        <>
            インターネットにおける技術的事項を議論・検討・紹介することで、
            <span className='text-yellow-600'>関西地域</span>のネットワーク運用者および利用者に貢献することを目的としたグループです。
            年に 2 回開催されている JANOG Meeting をベースとした地域 NOG の関西版になります。
            議論の場として、年 1 回ミーティングを開催しています。
        </>
    )
    const description2 = <>近畿2府4県（大阪・京都・滋賀・奈良・兵庫・和歌山）を中心に活動しますが、「なにわ」で通じますよね？？</>

    const listItems: ListItem[] = [
        {
            title: "スタンス",
            description: "議論内容は基本 Open で配信も行います。本会議後には懇親会も。職種関わらず Welcome !"
        },
        {
            title: "プログラム",
            description: "開催地域のネタを重視したネットワークに関する話題全般。プログラムの公募はしません。"
        },
        {
            title: "スポンサー",
            description: "多くのスポンサー様のご支援により、Naniwa NOG の各種活動やプログラムが実現しています! 改めて心より感謝申し上げます。"
        },
        {
            title: "NOC (Team Shirankedo)",
            description: "学生も含めた若手エンジニアの育成として、NOC チームを立ち上げ。「なんかインターネットに繋がった、シランケド。」という なにわ精神のもと、手を動かせる実践の場を提供。"
        },
    ]

    const content = <>
        <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900">
            Naniwa NOG の特徴
        </h2>
        <List list={listItems} />
    </>

    return (
        <Container
            title={title}
            description={description}
            description2={description2}
        >
            {content}
        </Container>
    )
}