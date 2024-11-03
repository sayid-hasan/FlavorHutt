import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

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
    </div>
  );
};

export default Home;
