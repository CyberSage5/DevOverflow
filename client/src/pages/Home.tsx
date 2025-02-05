import { HeroSection } from "@/components/landing/HeroSection";
import { SearchBar } from "@/components/landing/SearchBar";
import { TrendingQuestions } from "@/components/landing/TrendingQuestions";
import { KeyFeatures } from "@/components/landing/KeyFeatures";
import { CommunityHighlights } from "@/components/landing/CommunityHighlights";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchBar />
      <TrendingQuestions />
      <KeyFeatures />
      <CommunityHighlights />
    </main>
  );
}
