import { motion, useAnimation } from "framer-motion";

import { Helmet } from "react-helmet";
import Layout from "../../components/layout";
import M from "../../components/avatar";
import theme from "../../theme";
import { useEffect } from "react";

export default function Home({ data }) {
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
      <section className={"w-full h-full relative model overflow-hidden"}>
        <div
          className="w-full h-full flex justify-center items-center flex-col relative"
          style={{ zIndex: 10 }}
        >
          <div>
            <div
              className="splashLogo flex flex-col  items-center "
              style={{ zIndex: 10 }}
            >
              <ul>
                {data.title.map((e, i) => (
                  <motion.li
                    style={{ opacity: 0, x: -100, textAlign: "center" }}
                    custom={5 + i}
                    animate={controls}
                  >
                    <span className="z-10 text-center">{e}</span>
                  </motion.li>
                ))}

                <motion.div
                  style={{ x: -100, opacity: 0 }}
                  animate={controls}
                  custom={4}
                  className={" text-2xl text-center"}
                >
                  {data.subTitle}
                </motion.div>
                <motion.div
                  custom={7}
                  style={{
                    maxWidth: 600,
                    width: "100%",
                    marginTop: 40,
                    textAlign: "center",
                    opacity: 0,
                    y: 100,
                  }}
                  animate={controls}
                >
                  <p className="text-lg font-thin">{data.description}</p>
                </motion.div>
              </ul>
            </div>
          </div>
        </div>
        {data.showModel && (
          <motion.div
            id="tt"
            style={{
              opacity: 0,

              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              zIndex: 1,
            }}
            custom={8}
            animate={controls}
            className="absolute h-full w-full "
          >
            <M />
          </motion.div>
        )}
      </section>
    </Layout>
  );
}
