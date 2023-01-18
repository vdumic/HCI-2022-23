import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { H3, P, Ul, Li } from "../Post/components";

const components = {
  h3: H3,
  p: P,
  ul: Ul,
  li: Li,
};

const Post = ({ post }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-12 md:mx-24 sm:mx-8 md:gap-20">
      <div className="md:col-span-7 sm:order-3 sm:my-10">
        <Image alt="post" src={post.image.url} width="900" height="600" />
      </div>

      {/* desktop blog post */}

      <div className="sm:hidden col-span-5">
        <p className="text-blog-text text-xl font-semibold mb-5">{post.date}</p>
        <p className="text-7xl sm:text-3xl font-semibold">{post.title}</p>
      </div>
      <div className="sm:hidden md:col-span-7 text-justify">
        <MDXRemote {...post.mdxSource} components={components} lazy />
      </div>

      {/* mobile blog post */}

      <div className="md:hidden order-2">
        <p className="text-blog-text text-xl font-semibold">{post.date}</p>
      </div>
      <div className="md:hidden order-1">
        <p className="text-7xl sm:text-3xl font-semibold mb-3">{post.title}</p>
      </div>
      <div className="md:hidden text-justify order-4">
        <MDXRemote {...post.mdxSource} components={components} lazy />
      </div>
    </div>
  );
};

export default Post;
