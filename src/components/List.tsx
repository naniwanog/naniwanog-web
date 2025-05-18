import { CheckCircleIcon } from "@heroicons/react/20/solid";

export type ListItem = {
    title: string
    description: string
}

type Props = {
    list: ListItem[]
}

export function List({ list }: Props) {
    return (
        <ul role="list" className="mt-8 max-w-full space-y-8 text-gray-600">
            {list.map((item) => (
                <li key={item.title} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-600" />
                    <span>
                        <strong className="font-semibold text-gray-900">{item.title}</strong>{': '}
                        {item.description}
                    </span>
                </li>
            ))}
        </ul>
    )
}