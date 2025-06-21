"use client";

import { BubblesBackground } from "@/components/bubble-background";
import { FeaturedFish } from "@/components/landing/featured-fish";
import { FishStatusTips } from "@/components/landing/fish-status-tips";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { ReadyToPlay } from "@/components/landing/ready-to-play";
import { Footer } from "@/components/layout/footer";
import { usePlayer } from "@/hooks/dojo/usePlayer";
import { useBubbles } from "@/hooks/use-bubbles";
import { Account, constants, RpcProvider } from "starknet";

export default function LandingPage() {
  const bubbles = useBubbles({
    initialCount: 15,
    maxBubbles: 25,
    minSize: 6,
    maxSize: 30,
    minDuration: 8,
    maxDuration: 25,
    interval: 500,
  });

  const { getPlayer } = usePlayer();

  const handleCall = async () => {
    try {
      const provider = new RpcProvider({
        nodeUrl: "http://localhost:5050",
      });

      const account0 = new Account(
        provider,
        "0x13d9ee239f33fea4f8785b9e3870ade909e20a9599ae7cd62c1c292b73af1b7",
        "0x1c9053c053edf324aec366a34c6901b1095b07af69495bffec7d7fe21effb1b",
        undefined,
        constants.TRANSACTION_VERSION.V3
      );

      const result = await getPlayer(account0.address);
      console.log("result", result);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-500 to-blue-700 animated-background">
      <div className="water-movement"></div>
      <BubblesBackground bubbles={bubbles} />
      <Navbar />
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleCall}
      >
        Call
      </button>
      <main className="relative  container mx-auto px-4 py-8 flex flex-col items-center">
        <HeroSection />
        <FeaturedFish />
        <FishStatusTips />
        <ReadyToPlay />
      </main>

      <Footer />
    </div>
  );
}
