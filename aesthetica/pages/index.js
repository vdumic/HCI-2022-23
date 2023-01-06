import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import MainPageImage from "../components/Home/MainPageImage";
import HighlightLeft from "../components/Home/HighlightLeft";
import HighlightRight from "../components/Home/HighlightRight";
import Explore from "../components/Home/Explore";

const Home = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Home">
      <MainPageImage />
      <Explore />
      <HighlightLeft />
      <HighlightRight />
    </HeaderFooterLayout>
  );
};

export default Home;
