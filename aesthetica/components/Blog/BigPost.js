import Image from "next/image";
import Image1 from "../../assets/blog1.png";
import BigButton from "./BigButton";

const BigPost = () => {
  return (
    <div className="bg-blog">
      <Image alt="post" src={Image1} width="1300" height="550" />
      <div className="flex justify-between">
        <div className="m-5">
          <p className="text-4xl font-semibold">
            Interior Design Trends for the Holiday Season.
          </p>
          <p className="text-blog-text text-xl font-semibold my-5">
            December 16, 2022
          </p>
        </div>
        <div className="m-10">
          <BigButton title="Read more" link="/blog" />
        </div>
      </div>
    </div>
  );
};

export default BigPost;
