import Image from "next/image";
import Test from "../../assets/support1.png";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const PostLeft = () => {
  return (
    <>
      <div className="sm:hidden">
        <Spacer />
        <div className="flex justify-between max-w-full">
          <div className="flex-col mx-24 my-8 w-1/5">
            <p className="text-2xl ml-1 font-thin">Support</p>
            <p className="text-4xl font-semibold leading-tight mt-5">
              Configure your perfect smart home setup.
            </p>
            <MainButton title="Learn more" link="/blog/post" />
          </div>
          <Image src={Test} height="400" width="700" alt="Main image" />
        </div>
      </div>
      <div className="md:hidden">
        <Spacer />
        <div className="flex max-w-full">
          <div className="flex-col mx-8 my-8 w-full">
            <p className="text-2xl font-thin">Support</p>
            <p className="text-2xl font-semibold leading-tight my-5">
              Configure your perfect smart home setup.
            </p>
            <Image src={Test} width="540" height="400" alt="Main image" />
            <div className="flex justify-center">
              <MainButton title="Linens" link="/store/linens" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLeft;
