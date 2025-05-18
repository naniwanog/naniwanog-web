import Container from "@/components/Container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NaniwaNOG 1"
}

export default function NaniwaNOG1Page() {
  const title = "NaniwaNOG 1 開催概要"
  const description = (
    <>
    </>
  )

  return (
    <>
      <Container
        title={title}
        description={description}
      >
      </Container>
    </ >
  )
}
