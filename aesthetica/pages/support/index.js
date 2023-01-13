import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import SupportSearch from "../../components/Support/SupportSearch";
import SupportCard from "../../components/Support/SupportCard";
import PostRight from "../../components/Support/PostRight";
import PostLeft from "../../components/Support/PostLeft";

import ShippingIcon from "../../assets/shipping_icon.png";
import ReturnIcon from "../../assets/return_icon.png";
import BuildIcon from "../../assets/build_icon.png";

const Support = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Support">
      <div className="container flex sm:flex-col justify-center mx-auto mt-8">
        <SupportCard
          image={ShippingIcon}
          title="Track order"
          label="Where is my order?"
        />
        <SupportCard
          image={ReturnIcon}
          title="Start return"
          label="How to make a return?"
        />
        <SupportCard
          image={BuildIcon}
          title="Manuals"
          label="How to build the furniture?"
        />
      </div>
      <SupportSearch />
      <PostLeft />
      <PostRight />
    </HeaderFooterLayout>
  );
};

export default Support;
