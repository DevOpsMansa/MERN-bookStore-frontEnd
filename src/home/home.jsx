import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from './BestSellerBooks';
import FavBook from "./FavBook";


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
    </div>
  );
};

export default Home;
