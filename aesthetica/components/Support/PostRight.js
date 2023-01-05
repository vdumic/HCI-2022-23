import Image from "next/image";
import Test from "../../assets/support2.png";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const PostRight = () => {
  return (
    <>
      <Spacer />
      <div className="flex justify-between max-w-full">
        <Image src={Test} width="700" height="400" alt="Main image" />
        <div className="flex-col mx-24 my-8 w-1/5">
          <p className="text-2xl ml-1 font-thin">Support</p>
          <p className="text-4xl font-semibold leading-tight mt-5">
            Our specialists are ready to help you with advice, online or
            in-store.
          </p>
          <MainButton title="Learn more" link="/blog/post" />
        </div>
      </div>
    </>
  );
};

export default PostRight;
