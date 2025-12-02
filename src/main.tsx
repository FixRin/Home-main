import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero"
import FeatureCard from "./Components/FeatureCard"
import "./Css/App.css";
import HeroBanner from "./Components/HeroBanner";
import Divider from "./Components/Divider"
import AddCarSteps from "./Components/AddCarSteps";
import FooterDivider from "./Components/FooterDivider"
createRoot(document.getElementById("root")!).render(
  <StrictMode >
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HeroBanner />
        <FeatureCard />
        <Divider />
        <AddCarSteps />
      </main>
      <FooterDivider />
      <Footer />
    </div>
  </StrictMode>
);
