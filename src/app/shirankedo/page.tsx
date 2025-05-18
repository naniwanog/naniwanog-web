import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shirankedo"
}

export default function Page() {
    const title = "Shirankedo とは"
    const description = (
        <>
            NaniwaNOG 2 にて立ち上げられた、NOCチームです。
        </>
    )

    return (
        <Container
            title={title}
            description={description}
        >
        </Container>
    )
}