import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import SupportSearch from "../../components/Support/SupportSearch";
import SupportCard from "../../components/Support/SupportCard";
import PostRight from "../../components/Support/PostRight";
import PostLeft from "../../components/Support/PostLeft";

import ShippingIcon from "../../public/assets/support/support1.png";
import ReturnIcon from "../../public/assets/support/support2.png";
import BuildIcon from "../../public/assets/support/support3.png";

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
