import type { GatsbyNode } from "gatsby";

export const onCreatePage: GatsbyNode["onCreatePage"] = ({ page, actions }) => {
  const { createPage } = actions;
  // notice the addition of .*
  if (page.path.match(/^\/.*\/profile/)) {
    // notice page.context.language
    page.matchPath = `/${page.context?.language}/profile/:name`;
    createPage(page);
  }
};
