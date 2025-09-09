import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Banner } from "./Banner";
import { Category } from "./Category";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
    </div>
  );
};
