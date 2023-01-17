import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Post from "../../components/Blog/Post/Post";
import { H3, Ul, Ol, Li, P } from "../../components/Blog/Post/components";

import { getAllPostSlugs, getPostBySlug } from "../api/ContentfulAPI";

const components = {
  h3: H3,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
};

const BlogPost = ({ post }) => {
  return (
    <HeaderFooterLayout title="Aesthetica / Blog">
      <div className="flex justify-center my-10">
        <Post
          title={post.title}
          date={post.date}
          image={post.image.url}
          content={post.content}
        />
      </div>
      <MDXRemote {...post.mdxSource} components={components} lazy />
    </HeaderFooterLayout>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const posts = await getAllPostSlugs();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const post = await getPostBySlug(slug);

  post.mdxSource = await serialize(post.body);
  delete post.body;

  return {
    props: { post: post },
  };
}
