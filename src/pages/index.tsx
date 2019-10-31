import * as React from "react";
import Layout from "../layouts/Default";
import Title from "../components/typography/Title";

import "./index.styl";

export default () => {
  return (
    <Layout>
      <Title
        text="Explaining Monoids to the 10 years old me"
        highlight={true}
      />
    </Layout>
  );
};
