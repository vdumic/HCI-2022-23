import Image from "next/image";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

import MainImage from "../assets/main_image.png";

const Home = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Home">
      <div className="container flex mx-24 my-8 justify-between">
        <div className="flex-col content-center w-9/12">
          <h1 className="text-8xl font-bold">home of the</h1>
          <h1 className="text-8xl font-bold">furniture.</h1>
        </div>
        <div className="w-full h-full ml-20">
          <Image src={MainImage} width="640" height="440" alt="Main image" />
        </div>
      </div>
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
