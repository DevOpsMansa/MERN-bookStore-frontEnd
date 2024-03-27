import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from './BestSellerBooks';
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "../home/Review";
import ReviewCard from '../components/ReviewCard';


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      <ReviewCard/>
    </div>
  );
};

export default Home;
