import Container from "@/components/Container";

export default function Page() {
    const title = "NaniwaNOG 3 開催概要"
    const description = (
        <>
            <p>2025 年も、NaniwaNOG 3 を開催予定です！</p>
            <br />
            <p>開催地域: 滋賀県</p>
            <p>開催時期: 8 月下旬ごろ</p>
            <br />
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