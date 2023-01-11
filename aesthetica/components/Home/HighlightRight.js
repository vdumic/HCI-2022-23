import Image from "next/image";
import Test from "../../assets/highlight2.png";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const HighlightRight = () => {
  return (
    <div className="sm:hidden">
      <Spacer />
      <div className="flex justify-between max-w-full">
        <Image src={Test} width="540" height="400" alt="Main image" />
        <div className="flex-col mx-24 my-8 w-1/5">
          <p className="text-2xl ml-1 font-thin">Aesthetica Store</p>
          <p className="text-4xl font-semibold leading-tight mt-5">
            Add lightweight warmth to any bed with our premium linens.
          </p>
          <MainButton title="Bathroom" link="/store/bathroom" />
        </div>
      </div>
    </div>
  );
};

export default HighlightRight;
