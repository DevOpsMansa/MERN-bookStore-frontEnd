import React from 'react'
import { Banner } from './Banner'
import BookCards from '../shared/BookCards'
import BestSellerBooks from './FavoriteBooks'
import BestSeller from './BestSeller'
import OtherBooks from './OtherBooks'
import PromoBanner from './PromoBanner'
import Review from './Review'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSeller/>
      <BestSellerBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}
