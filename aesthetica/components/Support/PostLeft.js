import Image from "next/image";
import Test from "../../assets/support1.png";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const PostLeft = () => {
  return (
    <>
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
    </>
  );
};

export default PostLeft;
