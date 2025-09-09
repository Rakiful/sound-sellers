import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "./Banner";
import { Category } from "./Category";
import { TrendingSection } from "./TrendingSection";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <TrendingSection />
    </div>
  );
};
