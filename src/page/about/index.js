import { motion, useAnimation } from "framer-motion";

import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import { useEffect } from "react";

export default ({ data }) => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      z: 4,
      y: 0,
      transition: { delay: i * 0.4 },
    }));
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.helmet.title}</title>
      </Helmet>
      <motion.div
        animate={controls}
        custom={4}
        // layoutId={"about"}
        style={{ opacity: 0 }}
        className={
          "w-full h-full  model overflow-auto  z-10 flex flex-col justify-center items-center p-2"
        }
      >
        <section className="w-full h-full flex flex-col items-center">
          <div className="mt-60" />
          <div className="max-w-6xl	p-30">
            <div className="md:flex justify-between md:pb-10">
              <h1 className="text-5xl	mb-10 font-bold">{data.title}</h1>
              <div>
                {data.social.label}
                {data.social.links.map((e, i) => (
                  <>
                    <u>
                      <a href={e.url}>{e.label}</a>
                    </u>
                    {data.social.links.length - 1 !== i && ", "}
                  </>
                ))}
              </div>
            </div>

            {data.description.map((e) => (
              <p
                className="text-xl mb-10 font-thin"
                dangerouslySetInnerHTML={{ __html: e }}
              />
            ))}
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};
