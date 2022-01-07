import { motion, useAnimation } from "framer-motion";

import A from "../../components/bg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Layout(props) {
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
    <main className="relative h-screen w-screen" style={{ zIndex: 10 }}>
      <div className="fixed h-full w-full">
        <A />
      </div>
      <motion.div
        animate={controls}
        // layoutId={"about"}
        style={{ opacity: 0, zIndex: 99 }}
        custom="0"
        className="p-4 absolute top-0 "
      >
        <Link to={"/about-me"}>About</Link>
      </motion.div>
      <motion.div
        animate={controls}
        style={{ opacity: 0, zIndex: 99 }}
        custom="1"
        className="p-4 absolute bottom-0 left-0"
      >
        <Link to={"/contact-me"}>Contact</Link>
      </motion.div>
      <motion.div
        animate={controls}
        style={{ opacity: 0, zIndex: 99 }}
        custom="2"
        className="p-4 absolute bottom-0 right-0"
      >
        <Link to="/projects">Projects </Link>
      </motion.div>
      <motion.div
        animate={controls}
        style={{ opacity: 0, zIndex: 99 }}
        custom="3"
        className="p-4 absolute right-0"
      >
        {" "}
        <a href="/resume">Resume</a>{" "}
      </motion.div>
      {props.children}
    </main>
  );
}
