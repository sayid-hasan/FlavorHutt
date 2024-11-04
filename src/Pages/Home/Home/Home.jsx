import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopSellItems from "../TopSix/TopSellItems";
import Reviews from "../Reviews/Reviews";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-1
    "
    >
      <Helmet>
        <title>FlavorHutt | Home</title>
      </Helmet>
      <Banner></Banner>
      <TopSellItems></TopSellItems>
      <Reviews></Reviews>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
