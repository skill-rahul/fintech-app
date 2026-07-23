

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-black min-h-screen w-full flex flex-col items-center pt-24">

            {/* Background Glow */}
            <div className="absolute top-[-18%] left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_65%)] blur-[90px]"></div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Heading */}

                <h1
                    className="
          bg-gradient-to-b
          from-white
          via-[#EAEAEA]
          to-[#7D7D7D]
          bg-clip-text
          text-transparent

          font-black

          text-[52px]
          sm:text-[72px]
          md:text-[90px]
          lg:text-[110px]
          xl:text-[118px]

          tracking-[-0.05em]
          leading-[1.5]
        "
                >
                    Not a Bank.
                </h1>

                <h1
                    className="
        text-[#939393]

          font-black

          text-[52px]
          sm:text-[72px]
          md:text-[90px]
          lg:text-[110px]
          xl:text-[118px]

          tracking-[-0.05em]
          leading-[0.95]
          -mt-2
        "
                >
                    A Financial Upgrade.
                </h1>

                {/* Description */}

                <p
                    className="
          mt-8

          max-w-[760px]

          text-[#8A8A8A]

          text-[16px]
          sm:text-[18px]
          md:text-[20px]
          lg:text-[22px]

          leading-[1.6]

          font-medium
        "
                >
                    Vault engineers liquidity for the top 1%. Bypass legacy
                    <br />
                    banking friction with AI-driven limits and an ultra-premium
                    <br />
                    metal card.
                </p>        {/* Buttons */}

                <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

                    <button
                        className="
            rounded-full

            px-6
            lg:px-10

            py-4

            text-[18px]
            lg:text-[20px]

            font-semibold

            text-black

            bg-[linear-gradient(90deg,#F8E9A8_0%,#EAC84E_55%,#D9AF2F_100%)]

            shadow-[0_6px_20px_rgba(212,175,55,0.18)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-[0_10px_35px_rgba(212,175,55,0.30)]
          "
                    >
                        Check Eligibility
                    </button>

                    <button
                        className="
            rounded-full

            border
            border-[#1F1F1F]

            px-6
            lg:px-10

            py-4

            text-[18px]
            lg:text-[20px]

            font-semibold

            text-white

            transition-all
            duration-300

            hover:bg-white
            hover:text-black
          "
                    >
                        Why Vault?
                    </button>

                </div>

            </div>


            {/* BRAND SECTION */}

            <div className="w-full mt-20 border-y border-white/10  mb-10">
                <div className="max-w-7xl mx-auto px-8">

                    <div className="flex items-center justify-center gap-10 h-24">

                        <span className="text-[#777777] text-[18px] font-bold tracking-wide">
                            FORBES
                        </span>

                        <span className="text-[#777777] text-[18px] font-bold tracking-wide">
                            BLOOMBERG
                        </span>

                        <span className="text-[#777777] text-[18px] font-bold tracking-wide">
                            TECHCRUNCH
                        </span>

                        <span className="text-[#777777] text-[18px] font-bold tracking-wide">
                            WSJ
                        </span>

                    </div>

                </div>
            </div>

        </section>
    );
}