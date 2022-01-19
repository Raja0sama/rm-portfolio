import Layout from "../../components/layout";
import React from "react";

export default function index() {
  return (
    <Layout>
      <div className="h-screen w-full flex justify-center items-center">
        <img className="w-96" src={"/404.gif"} />
      </div>
    </Layout>
  );
}
