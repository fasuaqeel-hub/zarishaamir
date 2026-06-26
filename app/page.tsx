import { ClientProof } from "@/components/ClientProof";
import { FAQ } from "@/components/FAQ";
import { FeaturedWork } from "@/components/FeaturedWork";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientProof />
      <Process />
      <FAQ />
      <FeaturedWork />
      <FinalCTA />
    </main>
  );
}
