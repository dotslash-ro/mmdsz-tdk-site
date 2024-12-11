import React from "react";
import Layout from "../layout/layout";

export function withLayout<T>(component: React.FC<T>) {
  return (props: T) => <Layout>{component(props)}</Layout>;
}
