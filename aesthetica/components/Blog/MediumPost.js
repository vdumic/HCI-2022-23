import Image from "next/image";
import SmallButton from "./SmallButton";

const MediumPost = ({ title, date, image }) => {
  return (
    <div className="bg-blog mt-10">
      <Image alt="post" src={image} height="550" className="h-[300px]"/>
      <div className="flex justify-between">
        <div className="m-5">
          <p className="text-3xl font-semibold">{title}</p>
          <p className="text-blog-text text-xl font-semibold my-5">{date}</p>
        </div>
        <div className="m-auto mr-10">
          <SmallButton title="Read more" link="/blog/blog_post" />
        </div>
      </div>
    </div>
  );
};

export default MediumPost;
