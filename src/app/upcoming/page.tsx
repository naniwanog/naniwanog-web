import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "次回開催"
}

export default function Page() {
    const title = "NaniwaNOG 3 開催概要"
    const description = (
        <>
            <p>NaniwaNOG 3 開催決定！</p>
            <br />
            <p>
                📍 開催場所: 滋賀県{" "}
                <a
                    href="https://www.piazza-omi.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", color: "blue" }}
                >
                    ピアザ淡海
                </a>
            </p>
            <p>📅 開催日時: 2025年8月29日（金）12:00 開場予定</p>
            <br />
            <p>🗓 プログラムの公開・レジスト開始は<a href="https://peatix.com/event/4470817/" target="_blank">こちら</a>から</p>
            <p>今回は、いつもの若者セッションのほか、様々な面白いセッションを準備中です。</p>
            <p>詳細は近日中に発表予定です。最新情報は各種SNSやSlackで随時お知らせしますので、ぜひチェックしてください！</p>
        </>
    )

    return (
        <Container
            title={title}
            description={description}
        />
    )
}
