import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import Language from "../../../components/language";

const IndexPage: React.FC<PageProps> = ({ params }) => {
  return (
    <main>
      {JSON.stringify(params)}
      <Language />
      <h1>
        <FormattedMessage id="hello" />
      </h1>
      <p>
        <FormattedMessage id="welcome" />
      </p>
      <p>
        <FormattedMessage id="build" />
      </p>
      <Link to="/page-2/">
        <FormattedMessage id="go_page2" />
      </Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
