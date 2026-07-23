import Header from "./components/header/header";
import HeroSection from "./components/heroSection/heroSection";
import CalculatedLifestyle from "./components/calculatedlifestyle/Calculatedlifestyle";
import ZeroFrictionOnboarding from "./components/ZeroFrictionOnboarding/ZeroFrictionOnboarding";
import SystemArchitecture from "./components/SystemArchitecture";
import UnfairAdvantage from "./components/UnfairAdvantage/UnfairAdvantage";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer"

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <CalculatedLifestyle />
      <SystemArchitecture />
      <UnfairAdvantage />
      <ZeroFrictionOnboarding />
      <FAQ />
      <Footer />
    </>
  );
}