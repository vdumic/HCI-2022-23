import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Highlight from "../components/highlight";
import Image from "next/image";

import MainImage from "../assets/main_image.png";

const Home = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Home">
      <div className="container flex items-center justify-center mx-24 mt-6 mb-10">
        <div className="flex-col w-6/12">
          <h1 className="text-8xl font-semibold">home of the</h1>
          <h1 className="text-8xl font-semibold">furniture.</h1>
        </div>
        <div className="w-6/12 h-full ml-20">
          <Image src={MainImage} width="540" height="400" alt="Main image" />
        </div>
      </div>
      <Highlight />
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
      <h1>AESTHETICA</h1>
    </HeaderFooterLayout>
  );
};

export default Home;
