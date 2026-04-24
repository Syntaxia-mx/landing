import { Navbar } from "./components/Navbar";
import { ScrollExperience } from "./components/ScrollExperience";
import { ServicesSection } from "./components/ServicesSection";
import { ProofSection } from "./components/ProofSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <ScrollExperience />
        <ServicesSection />
        <ProofSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;