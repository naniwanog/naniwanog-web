import Image from 'next/image'
import Link from 'next/link'

export default function NaniwaNogIcon() {
    return (
        <Link href={"/"}>
            <Image
                src="/favicon.ico"
                alt="naniwa nog icon"
                width={48}
                height={48}
                className="-m-1.5"
            />
        </Link>
    )
}
