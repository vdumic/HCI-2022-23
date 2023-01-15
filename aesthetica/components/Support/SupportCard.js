import Image from "next/image";
import Link from "next/link.js";
import SupportButton from "./SupportButton.js";

const SupportCard = ({ image, title, label }) => {
  return (
    <>
      <div className="h-96 w-96  bg-white mx-14 sm:hidden">
        <Image
          src={image.url}
          height="100"
          width="100"
          alt={title}
          className="m-6"
        />
        <p className="font-bold text-4xl m-6">{label}</p>
        <SupportButton title={title} link="/under_construction" />
      </div>
      <div className="h-60 bg-white mb-4 md:hidden">
        <Image
          src={image}
          height="100"
          width="100"
          alt={title}
          className="m-6"
        />
        <Link href="/under_construction">
          <p className="font-bold text-4xl m-6">{label}</p>
        </Link>
      </div>
    </>
  );
};

export default SupportCard;
