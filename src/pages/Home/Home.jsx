import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "./Banner";
import { Category } from "./Category";
import { TrendingSection } from "./TrendingSection";
import { TopMusic } from "./TopMusic";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <TrendingSection />
      <TopMusic/>
    </div>
  );
};
