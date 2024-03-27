import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from './BestSellerBooks';
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
    </div>
  );
};

export default Home;
