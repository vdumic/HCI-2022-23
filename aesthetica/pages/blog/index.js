import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import BigPost from "../../components/Blog/BigPost";
import MediumPost from "../../components/Blog/MediumPost";
import SmallPost from "../../components/Blog/SmallPost";
import PostMobile from "../../components/Blog/PostMobile";

import Image1 from "../../public/assets/blog1.png";
import Image2 from "../../public/assets/blog2.png";
import Image3 from "../../public/assets/blog3.png";
import Image4 from "../../public/assets/blog4.png";

const Blog = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center mt-10 mb-6 sm:my-4">
        <p className="font-semibold text-5xl sm:text-4xl">BLOG</p>
      </div>

      <div className="desktop-blog sm:hidden">
        <div className="grid grid-cols-12 mx-24 gap-x-10">
          <div className="grid col-span-7">
            <BigPost
              title="Interior Design Trends for the Holiday Season."
              date="December 16, 2022"
              image={Image1}
            />
          </div>
          <div className="grid col-span-5">
            <MediumPost
              title="Let Lighting Set the Tone of Your Space."
              date="December 16, 2022"
              image={Image2}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 mx-24 gap-x-10">
          <div className="grid col-span-4">
            <SmallPost
              className="grid col-span-4"
              title="Jewellery and Small Items Storage Solutions"
              date="December 9, 2022"
              image={Image3}
            />
          </div>
          <div className="grid col-span-4">
            <SmallPost
              className="grid col-span-4"
              title="Smart Ways to Organize with Baskets"
              date="December 5, 2022"
              image={Image4}
            />
          </div>
          <div className="grid col-span-4">
            <SmallPost
              title="Smart Ways to Organize with Baskets"
              date="December 5, 2022"
              image={Image4}
            />
          </div>
        </div>
        <div className="flex justify-center my-20">
          <Link href="/under_construction">
            <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-lg font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
              <p>Older posts</p>
              <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-1" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center my-4 md:hidden">
        <PostMobile
          title="Interior Design Trends for the Holiday Season."
          date="December 16, 2022"
          image={Image1}
        />
        <PostMobile
          title="Let Lighting Set the Tone of Your Space"
          date="December 14, 2022"
          image={Image2}
        />
        <PostMobile
          title="Jewellery Storage Solutions"
          date="December 9, 2022"
          image={Image3}
        />
        <PostMobile
          title="Smart Ways to Organize with Baskets for a Less Cluttered Home"
          date="December 5, 2022"
          image={Image4}
        />
        <div className="flex justify-center mt-8 mb-4">
          <Link href="/under_construction">
            <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-m font-medium py-2 px-6 border-2 border-black rounded-full shadow-xl">
              <p>Older posts</p>
              <SlArrowRight className="h-5 w-5 cursor-pointer pt-1" />
            </button>
          </Link>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default Blog;
