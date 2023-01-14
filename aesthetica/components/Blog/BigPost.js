import Image from "next/image";
import BigButton from "./BigButton";
import Link from "next/link";

const BigPost = ({ title, date, image }) => {
  return (
    <div className="bg-blog mt-10">
      <Image alt="post" src={image} height="550" className="h-[300px]"/>
      <div className="flex justify-between">
        <div className="m-5  w-3/5">
          <p className="text-3xl font-semibold"><Link href="/blog/blog_post">{title}</Link></p>
          <p className="text-blog-text text-xl font-semibold my-5">{date}</p>
        </div>
        <div className="m-auto">
          <BigButton title="Read more" link="/blog/blog_post" />
        </div>
      </div>
    </div>
  );
};

export default BigPost;
