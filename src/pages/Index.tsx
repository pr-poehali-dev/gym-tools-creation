import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EquipmentSection from "@/components/EquipmentSection";
import ServicesSection from "@/components/ServicesSection";
import DeliverySection from "@/components/DeliverySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EquipmentSection />
      <ServicesSection />
      <DeliverySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
