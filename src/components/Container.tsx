import React, { JSX } from 'react'

type props = {
    title: string
    description: JSX.Element
    description2?: JSX.Element
    children?: React.ReactNode
}

export default function Container({ title, description, description2, children }: props) {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-[80%] text-base/7 text-gray-700">
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {title}
                </h1>
                <div className="mt-6 text-xl/8">
                    {description}
                </div>
                <div className="mt-10 max-w-full">
                    <div>
                        {description2}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
