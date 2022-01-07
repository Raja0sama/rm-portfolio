import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import A from "../../components/bg";
import Layout from "../../components/layout";
import M from "../../components/avatar";
import Music from "../../components/music";

export default function Home() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      z: 4,
      y: 0,
      transition: { delay: i * 1 },
    }));
  }, []);

  return (
    <Layout>
      <section className={"w-screen h-screen relative model overflow-hidden"}>
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
                <motion.div
                  style={{ x: -100, opacity: 0 }}
                  animate={controls}
                  custom={4}
                  className={"w-full min-h-screen	 absolute text-2xl"}
                >
                  <p>" Senior </p>
                  <p>Software </p>
                  <p>Engineer "</p>
                </motion.div>
                <motion.li
                  style={{ opacity: 0, x: -100, textAlign: "center" }}
                  custom={5}
                  animate={controls}
                >
                  <span className="z-10 text-center">Raja</span>
                </motion.li>
                <motion.li
                  style={{ opacity: 0, x: 100, textAlign: "center" }}
                  custom={6}
                  animate={controls}
                >
                  <span className="z-10 text-center">Osama</span>
                </motion.li>
              </ul>
            </div>
            <motion.div
              custom={7}
              style={{
                width: 600,
                marginTop: 40,
                textAlign: "center",
                color: "rgba(255,255,255,0.7)",
                opacity: 0,
                y: 100,
                // fontFamily: "Yuji Boku",
              }}
              animate={controls}
            >
              <p>
                I Describe my self as a Polyglot ~ Tech Agnostic ~ Rockstar
                Software Engineer. I Specialize in Javascript based Tech stacks
                to create fascinating applications.
              </p>
            </motion.div>
          </div>
        </div>
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
      </section>
    </Layout>
  );
}
