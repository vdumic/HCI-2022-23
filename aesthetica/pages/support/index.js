import Image from "next/image";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Spacer from "../../components/Spacer";

import ShippingIcon from "../../assets/shipping_icon.png";
import ReturnIcon from "../../assets/return_icon.png";
import BuildIcon from "../../assets/build_icon.png";
import SupportSearch from "../../components/SupportSearch";

const Support = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Support">
      <div className="container flex mx-auto">
        <div className="w-100 bg-white">
          <Image
            src={ShippingIcon}
            width="90"
            height="90"
            alt="Shipping icon"
          />
        </div>
        <div className="w-100 bg-white">
          <Image src={ReturnIcon} width="90" height="90" alt="Return icon" />
        </div>
        <div className="w-100 bg-white">
          <Image src={BuildIcon} width="90" height="90" alt="Build icon" />
        </div>
      </div>
      <SupportSearch />
      <Spacer />
    </HeaderFooterLayout>
  );
};

export default Support;
