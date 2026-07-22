import React from 'react'
import './UnfairAdvantage.css'
export default function UnfairAdvantage() {
    return (
        <>
            {/* Unfair Advantage Section */}
            <section className='unfair-advantage'>

                {/* Section Heading */}
                <div className='heading'>
                    <h1>Unfair Advantage</h1>
                    <p>See why the 1% is switching their primary accounts to Vault.

                    </p>
                </div>

                {/* Comparison Table */}
                <div className="comparison-table">

                    {/* Comparison Table Header */}
                    <div className="table-row">
                        <div className='feature'>Feature</div>
                        <div className='premium-bank'>Traditional Premium Bank</div>
                        <div className='vault'> Vault Titanium</div>
                    </div>

                    {/* Approval Time Row */}
                    <div className="table-row">
                        <div>Approval Time</div>
                        <div>7-14 Days</div>
                        <div>30 Seconds</div>
                    </div>

                    {/* Foreign Transaction Fee Row */}
                    <div className="table-row">
                        <div>Foreign Transaction Fee</div>
                        <div>3.5% + GST</div>
                        <div>	0.0%</div>
                    </div>

                    {/* Card Material Row */}
                    <div className="table-row">
                        <div>Card Material </div>
                        <div>Cheap Plastic</div>
                        <div>22g Solid Titanium</div>
                    </div>

                    {/* Credit Limit Row */}
                    <div className="table-row">
                        <div>Credit Limit</div>
                        <div>Capped by basic CIBIL</div>
                        <div>Dynamic AI-driven limit</div>
                    </div>

                    {/* Customer Support Row */}
                    <div className="table-row">
                        <div>Support Experience</div>
                        <div>"Press 1 for English"</div>
                        <div>Direct WhatsApp Concierge</div>
                    </div>
                </div>
            </section>
        </>
    )
}
