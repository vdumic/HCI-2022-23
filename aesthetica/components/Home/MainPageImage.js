import Image from "next/image";
import Spacer from "../Spacer";
import MainImage from "../../public/home/main_image.png";

const MainPageImage = () => {
  return (
    <div>
      <div className="flex items-center max-w-full mx-28 mt-6 mb-10 sm:justify-between sm:mx-6">
        <div className="flex-col w-6/12">
          <h1 className="text-8xl font-semibold sm:text-4xl">home of the</h1>
          <h1 className="text-8xl font-semibold sm:text-4xl">furniture.</h1>
        </div>
        <div className="w-6/12 h-full">
          <Image src={MainImage} width="540" height="400" alt="Main image" />
        </div>
      </div>
      <Spacer />
    </div>
  );
};

export default MainPageImage;
