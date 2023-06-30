import React from "react";
import {
  FormattedMessage,
  injectIntl,
  navigate,
  IntlShape,
} from "gatsby-plugin-intl";

const SecondPage = ({ intl }: { intl: IntlShape }) => (
  <main>
    <h1>
      <FormattedMessage id="hello_page2" />
    </h1>
    <p>
      <FormattedMessage id="welcome_page2" />
    </p>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      {intl.formatMessage({ id: "go_back" })}
    </a>
  </main>
);

export default injectIntl(SecondPage);
