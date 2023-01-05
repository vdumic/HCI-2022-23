import Image from "next/image";
import MainImage from "../../assets/main_image.png";

const MainPageImage = () => {
  return (
    <>
      <div className="flex items-center max-w-full mx-28 mt-6 mb-10">
        <div className="flex-col w-6/12">
          <h1 className="text-8xl font-semibold">home of the</h1>
          <h1 className="text-8xl font-semibold">furniture.</h1>
        </div>
        <div className="w-6/12 h-full">
          <Image src={MainImage} width="540" height="400" alt="Main image" />
        </div>
      </div>
    </>
  );
};

export default MainPageImage;
