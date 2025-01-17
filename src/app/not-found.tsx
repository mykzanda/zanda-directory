import React from 'react'

export default function NotFound() {
    return (
        <section className="overflow-hidden px-10 pb-10">
            <div className="container mx-auto px-4 relative">
                <div className="flex justify-center gap-6 mb-6">
                    <div
                        className="hidden xl:block w-80 h-80 rounded-3xl"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #F8F8F8 100%)"
                        }}
                    />
                    <div
                        className="hidden xl:block w-80 h-80 rounded-3xl"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #F8F8F8 100%)"
                        }}
                    />
                    <div
                        className="hidden sm:block w-80 h-80 rounded-3xl"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #F8F8F8 100%)"
                        }}
                    />
                    <div
                        className="w-80 h-80 rounded-3xl"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(248, 248, 248, 0.00) 0%, #F8F8F8 100%)"
                        }}
                    />
                </div>
                <div className="flex justify-center gap-6">
                    <div className="w-80 h-80 rounded-3xl bg-gray-50 bg-opacity-50" />
                    <div className="hidden xl:block w-80 h-80 rounded-3xl border border-gray-50" />
                    <div className="hidden xl:block w-80 h-80 rounded-3xl border border-gray-50" />
                    <div className="hidden sm:block w-80 h-80 rounded-3xl bg-gray-50 bg-opacity-50" />
                </div>
                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-full">
                    <h1 className="text-center text-4xl lg:text-5xl font-bold font-heading mb-6">
                        Oops. Page not found.
                    </h1>
                    <p className="text-center text-gray-500 text-lg mb-10 max-w-lg mx-auto">
                        The page you are looking for was moved, removed, renamed or might have
                        never existed!
                    </p>
                    <div className="flex justify-center">
                        <a
                            className="w-full sm:w-auto text-center py-4 px-6 h-14 inline-flex items-center justify-center rounded-full bg-orange-500 border border-orange-600 shadow text-sm font-semibold text-white hover:bg-orange-600 focus:ring focus:ring-orange-200 transition duration-200"
                            href="/"
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
