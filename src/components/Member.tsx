import { UserCircleIcon } from "@heroicons/react/20/solid"

export type Person = {
    name: string
    company: string
    image?: string
}

type Props = {
    people: Person[]
}

export default function Member({ people }: Props) {

    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-[80%] px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">NaniwaNOG 3 スタッフ</h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        ※ 50音順
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            {person.image ?
                                <img alt={person.name} src={person.image} className="mx-auto size-24 rounded-full" /> :
                                <UserCircleIcon className="mx-auto size-24 rounded-full text-gray-300" />
                            }
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-sm/6 text-gray-600">{person.company}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
