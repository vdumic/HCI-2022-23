import Image from "next/image";
import Test from "../../assets/highlight2.png";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const HighlightRight = () => {
  return (
    <>
      <div className="sm:hidden">
        <Spacer />
        <div className="flex justify-between max-w-full mx-28">
          <Image src={Test} width="540" height="400" alt="Main image" />
          <div className="flex-col mx-24 my-8 w-1/5">
            <p className="text-2xl ml-1 font-thin">Aesthetica Store</p>
            <p className="text-4xl font-semibold leading-tight mt-5">
              Bathroom essentials for the best start and end of your day.
            </p>
            <MainButton title="Bathroom" link="/store/bathroom" />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Spacer />
        <div className="flex max-w-full">
          <div className="flex-col mx-8 my-8 w-full">
            <p className="text-2xl ml-1 font-thin">Aesthetica Store</p>
            <p className="text-2xl font-semibold leading-tight my-5">
              Bathroom essentials for the best start and end of your day.
            </p>
            <Image src={Test} width="540" height="400" alt="Main image" />
            <div className="flex justify-center">
              <MainButton title="Bathroom" link="/store/bathroom" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightRight;
