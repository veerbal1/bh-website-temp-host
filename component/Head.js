import React from "react";
import Head from "next/head";

function DocumentHead({title}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Big Happy" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default DocumentHead;
