import Member, { Person } from "@/components/Member";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "スタッフ"
}

const people: Person[] = [
    { name: '生野 勇貴', company: 'BBIX株式会社' },
    { name: '伊集 治基', company: 'Fastly株式会社' },
    { name: '奥野 悠', company: 'クラスメソッド株式会社' },
    { name: '蟹江 大成', company: 'BBIX株式会社' },
    { name: '木村 文一', company: '近鉄ケーブルネットワーク株式会社' },
    { name: '熊本 豊', company: 'ミテネインターネット株式会社' },
    { name: '齋藤 努', company: 'JR西日本光ネットワーク株式会社' },
    { name: '佐藤 太一', company: '株式会社MIXI' },
    { name: '塩野 由依', company: '豊橋技術科学大学' },
    { name: '清水 貴史', company: '株式会社ZTV' },
    { name: '白石 敦', company: 'GMOネットアイアールディー株式会社' },
    { name: '高橋 数史', company: 'エヌ・ティ・ティ・スマートコネクト株式会社' },
    { name: '田村 敏彦', company: '株式会社ZTV' },
    { name: '中井 義久', company: '株式会社オプテージ' },
    { name: '西村 一弘', company: '' },
    { name: '温井 直輝', company: '近畿大学' },
    { name: '平田 大祐', company: 'さくらインターネット株式会社' },
    { name: '藤山 尚紀', company: '' },
    { name: '丸岡 哲也', company: '近畿大学' },
    { name: '村久木 優希', company: '株式会社オプテージ' },
    { name: '安永 真依子', company: 'さくらインターネット株式会社' },
    { name: '米田 悠人', company: 'さくらインターネット株式会社' },
]

export default function Page() {
    return (
        <Member people={people} />
    )
}
