import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

import Helmet from "react-helmet";
import Layout from "../../components/layout";

export default ({ data }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      z: 4,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Raja Osama - {data.title}</title>
      </Helmet>
      <div className="h-full w-full flex">
        <div className="h-full w-full h-full w-full  flex flex-col justify-center p-2">
          <motion.div
            custom={1}
            animate={controls}
            className="text-6xl font-extrabold "
            style={{ opacity: 0, x: -10 }}
          >
            {data.title}
          </motion.div>
          <br />
          <motion.div
            custom={1}
            animate={controls}
            style={{ opacity: 0, x: -10 }}
            className="text-xl font-thin"
          >
            {data.description}
          </motion.div>
          <br />
          <motion.div
            custom={2}
            animate={controls}
            style={{ opacity: 0, x: -10 }}
            className="text-xl font-thin"
          >
            <b>Technology</b> : {data.technology.map((e) => ` ${e},`)}
          </motion.div>
          <motion.div
            custom={3}
            animate={controls}
            style={{ opacity: 0, y: -10 }}
            className="flex"
          >
            {data.link.map((e) => (
              <a
                href={e.url}
                className="p-4 border-solid border-2 border-white-500 mt-4 hover:border-[#243c5a] cursor-pointer"
              >
                {e.text}
              </a>
            ))}
          </motion.div>
        </div>
        <AnimatePresence>
          <motion.div
            layoutId={data.slug}
            className="h-full w-full bg-white flex justify-center items-center"
          >
            <img className="w-full object-contain" src={data.image} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
};
