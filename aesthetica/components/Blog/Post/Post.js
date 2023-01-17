import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { H3, P, Ul, Ol, Li } from "../Post/components";

const components = {
  h3: H3,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
};

const Post = ({ post }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-5xl font-semibold mb-10">{post.title}</p>
        <p className="text-blog-text text-xl font-semibold my-5">{post.date}</p>
      </div>
      <Image alt="post" src={post.image.url} height="550" width="500" />
      <MDXRemote {...post.mdxSource} components={components} lazy />
    </div>
  );
};

export default Post;
