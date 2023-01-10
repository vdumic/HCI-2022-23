import Image from "next/image";
import SmallButton from "./SmallButton";

const SmallPost = ({ title, date, image }) => {
  return (
    <div className="bg-blog mt-10">
      <Image alt="post" src={image} height="400" className="h-3/4 w-full" />
      <div className="flex justify-between">
        <div className="m-5  w-3/5">
          <p className="text-4xl font-semibold">{title}</p>
          <p className="text-blog-text text-xl font-semibold my-5">{date}</p>
        </div>
        <div className="m-auto">
          <SmallButton title="Read more" link="/blog/blog_post" />
        </div>
      </div>
    </div>
  );
};

export default SmallPost;
