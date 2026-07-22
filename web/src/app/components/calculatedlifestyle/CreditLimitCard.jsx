"use client";
import { useState } from "react";

export default function CreditLimitCard() {
    const [monthlySpend, setMonthlySpend] = useState(100000);
    const creditLimit = monthlySpend * 5;
    const annualRewards = monthlySpend * 0.12;

    return (
        <>
            <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
                <div className=" w-full max-w-7xl mx-auto rounded-[30px] bg-[#0a0a0a] border border-white/10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="flex flex-col items-center">
                        <p className="text-[#888888] uppercase tracking-[1px] text-sm sm:text-base">
                            Estimated Credit Limit
                        </p>
                        <div className=" flex flex-col justify-center items-center w-full max-w-4xl mt-6">
                            <h1 className="text-[#D4AF37] text-7xl text-center max-md:text-6xl max-sm:text-5xl font-bold">
                                ₹{creditLimit.toLocaleString("en-IN")}
                            </h1>
                            <p className="mt-8 text-center text-[#555555] text-lg">
                                Monthly Spend :
                                <span className="text-white font-semibold ml-2">
                                    ₹{monthlySpend.toLocaleString("en-IN")}
                                </span>
                            </p>
                            <div className=" flex justify-center items-center w-full max-w-4xl mt-10 ">

                                <div className="w-8/12 h- max-w-4xl">
                                    <input
                                        type="range"
                                        min="100000"
                                        max="500000"
                                        step="10000"
                                        value={monthlySpend}
                                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                                        className="slider w-full caret-amber-300  "
                                    />
                                </div>
                            </div>

                            <div className=" mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">

                                <div>
                                    <h3 className="text-1xl sm:text-2xl font-bold text-white">
                                        ₹{annualRewards.toLocaleString("en-IN")}
                                    </h3>

                                    <p className="mt-1 text-sm uppercase tracking-[1px] text-[#888888]">
                                        Annual Rewards
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-1xl sm:text-2xl font-bold text-white">
                                        0%
                                    </h3>

                                    <p className="mt-1 text-sm uppercase tracking-[1px] text-[#888888]">
                                        Forex Markup
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-1xl sm:text-2xl font-bold text-white">
                                        Unlimited
                                    </h3>

                                    <p className="mt-1 text-sm uppercase tracking-[1px] text-[#888888]">
                                        Lounge Access
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}