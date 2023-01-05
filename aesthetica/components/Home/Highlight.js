import Image from "next/image";
import Test from "../../assets/test.jpg";
import Spacer from "../Spacer";
import MainButton from "./MainButton";

const Highlight = () => {
  return (
    <>
      <Spacer />
      <div className="container flex">
        <div className="flex-col mx-24 my-8 w-1/4">
          <p className="text-2xl ml-1 font-thin">Aesthetica Store</p>
          <p className="text-4xl font-semibold leading-tight mt-5">
            Add lightweight warmth to any bed with our premium linens.
          </p>
          <MainButton title="Linens" link="/linens" />
        </div>
        {/* <div className="">
          <Image src={Test} width="540" height="400" alt="Main image" />
        </div> */}
      </div>
      <Spacer />
    </>
  );
};

export default Highlight;
