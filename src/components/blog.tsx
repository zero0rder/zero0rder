import React from "react";
import { GlobalSectionTitle } from "./styled";
import { BlogContainer, BlogContent } from "./styled/blog";
import { TypingText } from "../utils/framer-motion/customText";
interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <BlogContainer>
      <GlobalSectionTitle>
        <TypingText title="Blog" />
      </GlobalSectionTitle>
      <BlogContent>
        <p>Coming soon...</p>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog;
