export type TimeTableItem = {
    time: string
    title: string
    people?: string[]
}

type TimeTableProps = {
    items: TimeTableItem[]
}

export function TimeTable({ items }: TimeTableProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="flow-root">
                <div className="flex justify-center -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-[80%] py-2 align-middle sm:px-6 lg:px-8">
                        <h1 className="font-semibold text-gray-900 text-left text-2xl mb-4">タイムテーブル</h1>
                        <table className="min-w-[80%] divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-[15%] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        時間
                                    </th>
                                    <th scope="col" className="w-[60%] px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        タイトル
                                    </th>
                                    <th scope="col" className="w-[25%] px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        登壇者
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {items.map((item) => (
                                    <tr key={item.time} className="even:bg-gray-50">
                                        <td className="w-[15%] whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            {item.time}
                                        </td>
                                        <td className="w-[60%] px-3 py-4 text-sm text-gray-500">{item.title}</td>
                                        <td className="w-[25%] px-3 py-4 text-sm text-gray-500">
                                            {item.people && item.people.map((person, index) => (
                                                <span key={index} className="block mt-1">
                                                    {person}
                                                </span>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

type SponsorTableProps = {
    items: string[]
}

export function SponsorTable({ items }: SponsorTableProps) {
    return (
        <div className="flow-root">
            <div className="flex justify-center -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <h1 className="font-semibold text-gray-900 text-left text-2xl mb-4">協賛 (五十音順)</h1>
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900">
                                    企業名
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {items.map((item) => (
                                <tr key={item} className="even:bg-gray-50">
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
