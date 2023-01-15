import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import MainPageImage from "../components/Home/MainPageImage";
import HighlightLeft from "../components/Home/HighlightLeft";
import HighlightRight from "../components/Home/HighlightRight";
import Explore from "../components/Home/Explore";

import { getAllRooms } from "./api/ContentfulAPI";

const Home = ({ exploreRooms }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Home">
      <MainPageImage />
      <Explore exploreRooms={exploreRooms} />
      <HighlightLeft />
      <HighlightRight />
    </HeaderFooterLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreRooms = await getAllRooms();

  return {
    props: { exploreRooms: exploreRooms },
  };
}
