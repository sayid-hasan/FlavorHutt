import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopSellItems from "../TopSix/TopSellItems";

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
    </div>
  );
};

export default Home;
