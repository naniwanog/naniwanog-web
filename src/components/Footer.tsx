const navigation = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/people/Naniwanog/61565613396201/',
        icon: () => (
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'X',
        href: 'https://x.com/naniwanog',
        icon: () => (
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-6">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
        ),
    },
    {
        name: 'Slack',
        href: 'https://nog-crew.slack.com/archives/C07KMD8ACUA',
        icon: () => (
            <svg fill="currentColor" viewBox="0 0 512 512" aria-hidden="true" className="size-6">
                <path d="M126.12,315.1A47.06,47.06,0,1,1,79.06,268h47.06Z" /><path d="M149.84,315.1a47.06,47.06,0,0,1,94.12,0V432.94a47.06,47.06,0,1,1-94.12,0Z" /><path d="M196.9,126.12A47.06,47.06,0,1,1,244,79.06v47.06Z" /><path d="M196.9,149.84a47.06,47.06,0,0,1,0,94.12H79.06a47.06,47.06,0,0,1,0-94.12Z" /><path d="M385.88,196.9A47.06,47.06,0,1,1,432.94,244H385.88Z" /><path d="M362.16,196.9a47.06,47.06,0,0,1-94.12,0V79.06a47.06,47.06,0,1,1,94.12,0Z" /><path d="M315.1,385.88A47.06,47.06,0,1,1,268,432.94V385.88Z" /><path d="M315.1,362.16a47.06,47.06,0,0,1,0-94.12H432.94a47.06,47.06,0,1,1,0,94.12Z" />
            </svg>
        ),
    },
]

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto border-t border-gray-900/10 max-w-7xl px-6 py-12 mt-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center gap-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                            <span className="sr-only">{item.name}</span>
                            <item.icon />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
                    &copy; NaniwaNOG. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
