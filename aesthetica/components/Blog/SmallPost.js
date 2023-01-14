import Image from "next/image";
import SmallButton from "./SmallButton";

const SmallPost = ({ title, date, image }) => {
  return (
    <div className="bg-blog mt-10">
      <Image alt="post" src={image} height="400" className="h-[220px]" />
        <div className="mt-5 mx-5">
          <p className="text-blog-text text-lg font-semibold">{date}</p>
          <p className="text-2xl mt-2 mb-5 font-semibold">{title}</p>
        </div>
          
    </div>
  );
};

export default SmallPost;
