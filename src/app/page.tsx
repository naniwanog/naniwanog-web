import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <div className="bg-white">

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-24 sm:py-32 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Naniwa NOG
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  インターネットにおける技術的事項を議論・検討・紹介することで、
                  <span className='text-yellow-600'>関西地域</span>のネットワーク運用者および利用者に貢献することを目的とします。
                  そのための場として、年1回一堂に会するミーティングを開催しています。
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="next"
                    className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                  >
                    次回開催概要 <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src="/top.jpg"
            alt="naniwa top"
            width={3465}
            height={1795}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full blur-xs"
          />
        </div>
      </div>
    </div>
  )
}
