import Image from "next/image";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import SupportSearch from "../../components/Support/SupportSearch";

import ShippingIcon from "../../assets/shipping_icon.png";
import ReturnIcon from "../../assets/return_icon.png";
import BuildIcon from "../../assets/build_icon.png";
import SupportButton from "../../components/Support/SupportButton.js";
import PostRight from "../../components/Support/PostRight";
import PostLeft from "../../components/Support/PostLeft";

const Support = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Support">
      <div className="container flex justify-center mx-auto mt-8">
        <div className="h-96 w-96  bg-white mx-14 ">
          <Image
            src={ShippingIcon}
            height="100"
            alt="Shipping icon"
            className="m-6"
          />
          <p className="font-bold text-4xl m-6">Where is my order?</p>
          <SupportButton title="Track order" link="/shipping" />
        </div>
        <div className="h-96 w-96 bg-white mx-14">
          <Image
            src={ReturnIcon}
            height="100"
            alt="Return icon"
            className="m-6"
          />
          <p className="font-bold text-4xl m-6">How to make a return?</p>
          <SupportButton title="Start return" link="/return" />
        </div>
        <div className="h-96 w-96 bg-white mx-14">
          <Image
            src={BuildIcon}
            height="100"
            alt="Build icon"
            className="m-6"
          />
          <p className="font-bold text-4xl m-6">How to build the furniture?</p>
          <SupportButton title="Manuals" link="/build" />
        </div>
      </div>
      <SupportSearch />
      <PostLeft />
      <PostRight />
    </HeaderFooterLayout>
  );
};

export default Support;
