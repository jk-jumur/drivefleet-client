import AvailableCars from "@/components/Home/AvailableCars";
import Banner from "@/components/Home/banner/Banner";
import CarBusinessShowcase from "@/components/Home/CarBusinessShowcase";
import FAQ from "@/components/Home/FAQ";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
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
      <Testimonials/>
      <FAQ/>
    </>
  );
}