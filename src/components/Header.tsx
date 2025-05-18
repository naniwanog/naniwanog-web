'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import NaniwaNogIcon from '@/components/Icon'
import { usePathname } from 'next/navigation'

const navigation = [
    { name: '概要', href: 'about' },
    { name: '次回開催', href: 'upcoming' },
    { name: '過去の開催', href: 'last' },
    { name: 'スタッフ', href: 'staff' },
    { name: 'Shirankedo', href: 'shirankedo' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === '/'

    return (
        <header className={`${isHome ? 'fixed' : ''
            } inset-x-0 pb-6 top-0 z-50 bg-orange-100/70 backdrop-blur`}>

            {/* For PC */}
            <div className="mx-auto min-w-80% w-[90%]">
                <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                    <nav aria-label="Global" className="flex items-center justify-between lg:justify-start">
                        <NaniwaNogIcon />
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                        <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            {/* For mobile */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
