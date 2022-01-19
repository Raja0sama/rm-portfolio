import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Helmet } from "react-helmet";
import Layout from "../../components/layout";

export default ({ data }) => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      z: 4,
      y: 0,
      transition: { delay: i * 0.5 },
    }));
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.helmet.title}</title>
      </Helmet>
      <div
        className="flex flex-col justify-center items-center h-full text-center"
        style={{ zIndex: 10 }}
      >
        <motion.div
          custom={0}
          animate={controls}
          style={{ opacity: 0, y: -10 }}
          className="text-6xl font-bold"
        >
          {data.title}
        </motion.div>
        <br />
        <motion.div
          custom={1}
          animate={controls}
          style={{ opacity: 0, y: -10 }}
          className="font-thin text-lg w-3/5 text-center"
        >
          {data.description}
        </motion.div>
        <motion.div
          custom={2}
          animate={controls}
          style={{ opacity: 0, y: -10 }}
          className="p-4 border-solid border-2 border-white-500 mt-4 hover:border-[#243c5a] cursor-pointer"
        >
          {data.btn.label}
        </motion.div>
        <motion.div
          custom={3}
          animate={controls}
          style={{ opacity: 0, y: -10 }}
          className="text-xl p-10 font-thin"
        >
          {data.ending}
        </motion.div>
      </div>
    </Layout>
  );
};
