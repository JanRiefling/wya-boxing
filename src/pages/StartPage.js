import React from "react";
import WyaAppBar from "../components/WyaAppBar";
import StopWatch from "../components/timer/StopWatch";
import ComboDisplay from "../components/combo-display/ComboDisplay";
import AllSettings from "../components/AllSettings";
import WyaStartButton from "../components/buttons/WyaStartButton";
import HeroSection from "../components/hero-section/HeroSection";
import Footer from "../components/footer/Footer";

export default function StartPage() {
  return (
    <div className="grid grid-cols-1 gap-16">
      <WyaAppBar />
      <HeroSection />
      <AllSettings />
      <WyaStartButton />
      <div>
        <ComboDisplay />
        <StopWatch />
      </div>
      <Footer className="fixed bottom-0 left-0" />
    </div>
  );
}
