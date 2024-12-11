import LatestCollections from "@/components/LatestCollections";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import PolicySection from "@/components/Policy";
import BestSellers from "@/components/Seller";
import SubscriptionForm from "@/components/Subscription";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestCollections />
      <BestSellers />
      <PolicySection />
      <SubscriptionForm />
      <Footer />
    </>
  );
}
