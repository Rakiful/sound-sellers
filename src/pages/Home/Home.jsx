import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "./Banner";
import { Category } from "./Category";
import { TrendingSection } from "./TrendingSection";
import { TopMusic } from "./TopMusic";
import { WhyChoose } from "./WhyChoose";
import { ChoosePlan } from "./ChoosePlan";
import { HowItWorks } from "./HowItWorks";
import { NewsLetter } from "./NewsLetter";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <TrendingSection />
      <TopMusic />
      <WhyChoose />
      <ChoosePlan />
      <HowItWorks />
      <NewsLetter />
    </div>
  );
};
