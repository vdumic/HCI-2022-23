import Image from "next/image";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Spacer from "../../components/Spacer";
import SupportSearch from "../../components/Support/SupportSearch";

import ShippingIcon from "../../assets/shipping_icon.png";
import ReturnIcon from "../../assets/return_icon.png";
import BuildIcon from "../../assets/build_icon.png";
import SupportButton from "../../components/Support/SupportButton";

const Support = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Support">
      <div className="container flex justify-center mx-auto mt-8">
        <div className="w-96 h-full bg-white mx-14">
          <Image
            src={ShippingIcon}
            height="100"
            alt="Shipping icon"
            className="m-6"
          />
          <p className="font-bold text-4xl m-6">Where is my order?</p>
          <SupportButton title="Track order" />
        </div>
        <div className="w-96 h-full bg-white mx-14">
          <Image
            src={ReturnIcon}
            height="100"
            alt="Return icon"
            className="m-6"
          />
          <p className="font-bold text-4xl m-6">How to make a return?</p>
          <SupportButton title="Start return" />
        </div>
        <div className="w-96 h-full bg-white mx-14">
          <Image
            src={BuildIcon}
            height="100"
            alt="Build icon"
            className="m-6"
          />
          <p className="font-bold text-4xl m-6">How to build the furniture?</p>
          <SupportButton title="Manuals" />
        </div>
      </div>
      <SupportSearch />
      <Spacer />
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
      <h1>SUPPORT</h1>
    </HeaderFooterLayout>
  );
};

export default Support;
