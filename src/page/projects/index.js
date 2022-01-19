import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import data from "../../portfolio_static";
import theme from "../../theme";

export default ({ data }) => {
  const projects = data;
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      z: 4,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.8 },
    }));
  }, []);

  return (
    <Layout>
      <div className="h-full w-full overflow-auto  justify-center flex-col p-10">
        <div className="mt-60" />
        <motion.div
          custom={0}
          style={{ opacity: 0, y: 10, scale: 0 }}
          animate={controls}
          className="text-6xl font-extrabold"
        >
          PROJECTS .
        </motion.div>
        <br />

        <div class="grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1  gap-4">
          {projects.map((e, i) => (
            <Link to={"/" + e.slug}>
              <motion.div
                custom={i + 1}
                layoutId={e.slug}
                whileHover={{ scale: 1.01 }}
                style={{ opacity: 0, y: 100 }}
                animate={controls}
                className="border-solid border-2 border-white flex justify-center p-2 h-96"
              >
                <img className="w-full object-contain" src={e.image} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};
