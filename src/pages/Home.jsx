import Header from "../components/Header";
import Menu from "../components/Menu";
import Quote from "../components/Quote";
import Venue from "../components/Venue";

const Home = () => {
  return (
    <div className="bg-[#5B0017]">
      <Header />
      <Venue />
      <Quote />
      <Menu />
    </div>
  );
};

export default Home;
