import { ClientProof } from "@/components/ClientProof";
import { FAQ } from "@/components/FAQ";
import { FeaturedWork } from "@/components/FeaturedWork";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ClientProof />
      <Process />
      <FeaturedWork />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
