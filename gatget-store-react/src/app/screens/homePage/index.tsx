import { Container } from "@mui/material";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./Featuredproducts";
import CategoriesSection from "./CategoriesSectio";
import BestSellersSection from "./BestSellersSection";
import LimitedOfferSection from "./LimitedOfferSection";

export function HomePage() {
  return (
    <div className={"homepage"}>
      <HeroSection/>
      <FeaturedProducts/>
      <CategoriesSection/>
      <BestSellersSection/>
      <LimitedOfferSection/>
   </div>

);
}