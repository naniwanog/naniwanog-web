import Container from "@/components/Container"
import { SponsorTable, TimeTable, TimeTableItem } from "@/components/Table"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NaniwaNOG 2"
}

export default function NaniwaNOG2Page() {
  const title = "NaniwaNOG 2 開催概要"
  const description = (
    <>
      <p className="font-bold">本会議</p>
      <p>日時: 2024年10月10日(木) 13:00 ～ 18:00</p>
      <p>会場：イーグレひめじ あいめっせホール (〒670-0012 兵庫県姫路市本町68 - 290 )</p>
      <br />
      <p className="font-bold">懇親会</p>
      <p>日時: 2024年10月10日(木) 18:30 ～ 21:00</p>
      <p>会場: 姫路モノリス</p>
      <p>会費: 4950円 (税込み)</p>
    </>
  )

  const timeTableItems: TimeTableItem[] = [
    { time: "12:00 - 13:00", title: "会場" },
    { time: "13:00 - 13:10", title: "開会宣言・会場諸注意", people: ["蟹江 大成 (BBIX株式会社)"] },
    {
      time: "13:10 - 13:35", title: "NTT西日本における災害時の現場対応と、\nネットワーク視える化ツールの能登半島地震での予測と実績",
      people: ["坂田 兼続 (西日本電信電話株式会社)", "稲積 克哲 (株式会社NTTフィールドテクノ)"]
    },
    {
      time: "13:35 - 14:00", title: "自然災害オープンマイク",
      people: ["坂田 兼続 (西日本電信電話株式会社)", "須恵 功貴 (西日本電信電話株式会社)", "中井 義久 (株式会社オプテージ)", "久保 文隆 (株式会社オプテージ)", "松原 正幸(株式会社オプテージ)"]
    },
    { time: "14:00 - 14:15", title: "休憩" },
    {
      time: "14:15 - 14:40", title: "BAKUCHIKU と Team Shirankedo イベントネットワーク徒然",
      people: ["丸岡 哲也 (BAKUCHIKU / 近畿大学)", "温井 直輝 (Team Shirankedo / 近畿大学)", "米田 悠人 (さくらインターネット株式会社)"]
    },
    {
      time: "14:40 - 15:30", title: "若手セッション 2024",
      people: ["山口 晏奈 (株式会社QTnet)", "井ノ口 留菜 (FXC株式会社)", "吉川 知輝 (京大マイコンクラブ / Home NOC Operators' Group)", "土屋 太二 (さくらインターネット株式会社 / show int)"]
    },
    { time: "15:30 - 15:45", title: "休憩" },
    {
      time: "15:45 - 16:00", title: "各種イベント告知",
      people: ["生野 勇貴 (大阪ピアリングフェスティバル実行委員長 / BBIX株式会社)", "西田 貴之 (3SNOG実行委員 / 株式会社エネコム)", "蟹江 大成 (JANOG55プログラム委員長 / BBIX株式会社)"]
    },
    {
      time: "16:00 - 16:45", title: "東西の AS を分ける？分けない？",
      people: ["西村 一弘 (さくらインターネット株式会社)", "山口 勝司 (ビッグローブ株式会社)", "佐藤 正樹 (ファミリーネットジャパン株式会社)", "生野 勇貴 (BBIX株式会社)"]
    },
    { time: "16:45 - 17:00", title: "休憩" },
    {
      time: "17:00 - 17:50", title: "夏の熱戦を届ける「バーチャル高校野球」の舞台裏", people: ["村中 貴彦 (朝日放送グループホールディングス株式会社)", "髙木 衛(朝日放送グループホールディングス株式会社)", "福田 一則(株式会社インターネットイニシアティブ)"]
    },
    { time: "17:50 - 18:00", title: "閉会宣言", people: ["奥野 悠 (クラスメソッド株式会社)"] }
  ]

  const sponsors = [
    "アルテリア・ネットワークス株式会社",
    "インターネットマルチフィード株式会社",
    "エクイニクス・ジャパン株式会社",
    "NTT スマートコネクト株式会社",
    "MC デジタル・リアリティ株式会社",
    "株式会社オプテージ株式会社",
    "近鉄ケーブルネットワーク株式会社",
    "さくらインターネット株式会社",
    "JR西日本光ネットワーク株式会社",
    "株式会社 JPIX",
    "セイコーソリューションズ株式会社",
    "株式会社 ZTV",
    "株式会社ネットアイアールディー",
    "BBIX 株式会社",
    "ビー・ビー・バックボーン株式会社"
  ]

  return (
    <>
      <Container
        title={title}
        description={description}
      >
        <div className="min-w-full">
          <SponsorTable items={sponsors} />
        </div>
      </Container>
      <div className="py-8">
        <TimeTable items={timeTableItems} />
      </div>
    </ >
  )
}
