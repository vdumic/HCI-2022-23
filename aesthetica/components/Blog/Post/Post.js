import Image from "next/image";

const Post = ({ title, date, image }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-5xl font-semibold mb-10">{title}</p>
        <p className="text-blog-text text-xl font-semibold my-5">{date}</p>
      </div>
      <Image alt="post" src={image} height="550" />
    </div>
  );
};

export default Post;
