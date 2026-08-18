import AvailableCars from "@/components/Home/AvailableCars";
import Banner from "@/components/Home/banner/Banner";
import CarBusinessShowcase from "@/components/Home/CarBusinessShowcase";
import HowItWorks from "@/components/Home/HowItWorks";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export const metadata = {
  title: "Home",
  description: "DriveFleet home page with premium car rental offers, feature highlights, and a curated vehicle fleet.",
};

export default function Home() {
  return (
    <>
      <Banner />
      <AvailableCars />
      <CarBusinessShowcase />
      <HowItWorks />
      <WhyChooseUs />
    </>
  );
}