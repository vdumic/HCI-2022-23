import Image from "next/image";
import MainImage from "../assets/main_image.png";
import Spacer from "./Spacer";

const MainPageImage = () => {
  return (
    <>
      <div className="flex mx-24 my-8 justify-center">
        <div className="flex flex-col pt-28 w-9/12">
          <h1 className="text-left text-8xl font-bold">home of the</h1>
          <h1 className="text-left text-8xl font-bold">furniture.</h1>
        </div>
        <div className="mr-10">
          <Image src={MainImage} width="640" height="440" alt="Main image" />
        </div>
      </div>
      <Spacer />
    </>
  );
};

export default MainPageImage;
