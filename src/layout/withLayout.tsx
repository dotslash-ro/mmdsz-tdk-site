import React from "react";
import Layout from "../layout/layout";

export function withLayout(component: React.FC) {
  return (props: any) => <Layout>{component(props)}</Layout>;
}
