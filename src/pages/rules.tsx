import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

import { withLayout } from "../layout/withLayout";
import { fetchRules } from "../api/rules.api";

const Rules = () => {
  const [rules, setRules] = useState<string>();

  useEffect(() => {
    fetchRules().then((resp) => setRules(resp.data.attributes.body));
  }, []);

  return (
    <div className="w-max-2xl prose mx-auto py-20 px-10 prose-a:text-tdk-accent prose-a:hover:underline prose-img:my-0 prose-img:py-0">
      <Helmet>
        <title>33. TDK - Szabályzat</title>
      </Helmet>
      <h1>A Marosvásárhelyi Tudományos Diákköri Konferencia szabályzata</h1>
      {rules ? <Markdown>{rules}</Markdown> : "Betöltés..."}
    </div>
  );
};

export default withLayout(Rules);
