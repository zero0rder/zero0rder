import React from "react";
import { GlobalSectionTitle } from "./styled";
import { BlogContainer } from "./styled/blog";
import { TypingText } from "../utils/framer-motion/customText";
import { BlogProps } from "../interfaces";
import Cards from "./shared/cards";

const noPosts = [
  {
    id: 0,
    name: "N/A",
    description: "Blog post on the way.",
    html_url: "",
    homepage: "",
  },
];

const Blog: React.FC<BlogProps> = () => {
  return (
    <BlogContainer>
      <GlobalSectionTitle>
        <TypingText title="Blog" />
      </GlobalSectionTitle>
      <Cards data={noPosts} />
    </BlogContainer>
  );
};

export default Blog;
