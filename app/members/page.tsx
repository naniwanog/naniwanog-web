import styles from "./page.module.css";

const data = {
    contents: [
        { id: "1", name: "生野 勇貴", company: "BBIX株式会社", role: "" },
        { id: "2", name: "伊集 治基", company: "Fastly株式会社", role: "" },
        { id: "3", name: "奥野 悠", company: "インターネットマルチフィールド株式会社", role: "実行委員長" },
        { id: "4", name: "蟹江 大成", company: "BBIX株式会社", role: "実行委員長" },
        { id: "5", name: "木村 文一", company: "近鉄ケーブルネットワーク株式会社", role: "" },
        { id: "6", name: "熊本 豊", company: "ミテネインターネット株式会社", role: "配信" },
        { id: "7", name: "齋藤 努", company: "JR西日本光ネットワーク株式会社", role: "" },
        { id: "8", name: "佐藤 太一", company: "株式会社MIXI", role: "配信" },
        { id: "9", name: "塩野 由依", company: "大阪工業大学", role: "NOC" },
        { id: "10", name: "白石 敦", company: "株式会社ネットアイアールディー", role: "" },
        { id: "11", name: "高橋 数史", company: "エヌ・ティ・ティ・スマートコネクト株式会社", role: "NOC" },
        { id: "12", name: "中井 義久", company: "株式会社オプテージ", role: "" },
        { id: "13", name: "西村 一弘", company: "さくらインターネット株式会社", role: "" },
        { id: "14", name: "萩本 将訓", company: "エヌ・ティ・ティ・スマートコネクト株式会社", role: "" },
        { id: "15", name: "平田 大祐", company: "さくらインターネット株式会社", role: "司会" },
        { id: "16", name: "藤山尚紀", company: "BBIX株式会社", role: "司会" },
        { id: "17", name: "村久木 優希", company: "株式会社オプテージ", role: "NOC" },
        { id: "18", name: "安永 真依子", company: "さくらインターネット株式会社", role: "広告" },
        { id: "19", name: "米田 悠人", company: "さくらインターネット株式会社", role: "NOC" },
        { id: "20", name: "中田 清登", company: "近畿大学大学院", role: "NOC" },
        { id: "21", name: "國定 航", company: "近畿大学", role: "NOC" },
        { id: "22", name: "温井 直輝", company: "近畿大学", role: "NOC" },
        { id: "23", name: "丸岡 哲也", company: "近畿大学", role: "NOC" },
        { id: "24", name: "御手洗 匠", company: "ECCコンピュータ専門学校", role: "NOC" },
        { id: "25", name: "柏崎 礼生", company: "近畿大学情報学部情報学科 准教授 ", role: "見守り役" },
        { id: "26", name: "佐々木 建", company: "", role: "見守り役" }
    ]
};

//役割でソート 
data.contents.sort((a, b) => {
    if (a.role < b.role) return 1;
    if (a.role > b.role) return -1;
    return a.name.localeCompare(b.id);
});


export default function Page(){
    return(
        //<div style={{margin:20}}>
        //<h1>メンバーページ</h1>
        //</div>

        <div className={styles.container}>
            <h2 className={styles.subtitle}>メンバーリスト</h2>
            {data.contents.length===0 ? (
                <p className={styles.empty}>メンバーが登録されていません</p>
            ):(
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th>氏名</th>
                            <th>所属</th>
                            <th>役割</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {data.contents.map((member) => (
                            <tr key={member.id}>
                                <td className={styles.name}>{member.name}</td>
                                <td className={styles.company}>{member.company || '???'}</td>
                                <td className={styles.role}>{member.role || '???'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div>
    );
}

