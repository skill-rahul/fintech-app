export default function Footer() {
  return (

    <>
      {/* footer section */}
      <footer className="bg-neutral-950 text-white ">

        {/* Footer Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-20">

          {/* Horizontal Divider */}
          <div className="border-t border-white/10 mb-16 pt-8"></div>
          {/* Horizontal Divider end*/}

          {/* Brand Identity Section */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-extrabold">
              Vault<span className="text-white">.</span>
            </h2>
            {/* Brand Description */}
            <p className="mt-5 text-[#888888] text-[15px] leading-6">
              Engineering financial power for those
              <br />
              who build the future.
            </p>
            {/* Brand Description end*/}
          </div>
          {/* Brand Identity Section end */}
          {/* Footer Navigation Section */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-35 mt-16">
            {/* Products Links */}
            <div>
              <h3 className="text-white text-[18px] font-bold mb-6">
                Products
              </h3>

              <ul className="space-y-2 text-[15px] text-[#888888]">
                <li className="hover:text-white cursor-pointer transition">
                  Titanium Card
                </li>

                <li className="hover:text-white cursor-pointer transition">
                  Scale Loans
                </li>
              </ul>
            </div>
            {/* End of Products Links */}
            {/* Company Links */}
            <div>
              <h3 className="text-white text-[18px] font-semibold mb-6">
                Company
              </h3>

              <ul className="space-y-2 text-[15px] text-[#888888]">
                <li className="hover:text-white cursor-pointer transition">
                  About Us
                </li>

                <li className="hover:text-white cursor-pointer transition">
                  Careers
                </li>
              </ul>
            </div>
            {/* End of Company Links */}
            {/* Legal Links */}
            <div>
              <h3 className="text-white text-[18px] font-semibold mb-6">
                Legal
              </h3>
              <ul className="space-y-2 text-[15px] text-[#888888]">
                <li className="hover:text-white cursor-pointer transition">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer transition">
                  Terms
                </li>
              </ul>
            </div>
            {/* End of Legal Links */}
          </div>
          {/* Horizontal Divider */}
          <div className="border-t border-white/10 mt-16 pt-8">
            {/* Footer Copyright Section */}
            <p className="text-center text-sm text-[#4A4A4A]">
              © 2025 Vault Financial Technologies. Crafted with absolute precision.
            </p>
            {/* Footer Copyright Section end*/}
          </div>
          {/* Horizontal Divider end*/}
        </div>
        {/* Footer Content Container end */}
      </footer>
      {/* footer section end*/}
    </>
  );
}