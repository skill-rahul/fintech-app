import Creditlimitcard from "./CreditLimitCard";

export default function CalculatedLifestyle() {
  return (
    <section className="w-full bg-black py-16 sm:py-20 lg:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">

          <h1 className=" font-bold font-sans text-3xl sm:text-4xl md:text-5xl text-white">
            Calculated for your Lifestyle
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-[#888888] leading-7">
            Slide to input your monthly spend and see the power of Vault's
            <br className="hidden md:block" />
            dynamic limit engine and reward architecture.
          </p>

        </div>

        {/* Credit Card Section */}
        <div className="mt-16">
          <Creditlimitcard />
        </div>

      </div>

    </section>
  );
}