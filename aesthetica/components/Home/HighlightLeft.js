import Image from "next/image";
import Test from "../../assets/highlight1.jpg";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const HighlightLeft = () => {
  return (
    <div className="sm:hidden">
      <Spacer />
      <div className="flex justify-between max-w-full">
        <div className="flex-col mx-24 my-8 w-1/5">
          <p className="text-2xl ml-1 font-thin">Aesthetica Store</p>
          <p className="text-4xl font-semibold leading-tight mt-5">
            Add lightweight warmth to any bed with our premium linens.
          </p>
          <MainButton title="Linens" link="/store/linens" />
        </div>
        <Image src={Test} height="400" width="540" alt="Main image" />
      </div>
    </div>
  );
};

export default HighlightLeft;
