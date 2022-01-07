import { motion, useAnimation } from "framer-motion";

import Layout from "../../components/layout";
import { useEffect } from "react";

export default function About() {
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
      <motion.div
        animate={controls}
        custom={4}
        // layoutId={"about"}
        style={{ opacity: 0 }}
        className={
          "w-screen h-screen absolute inset-0 model overflow-hidden  z-10 flex flex-col justify-center items-center"
        }
      >
        <section className="w-full h-full flex flex-col items-center">
          <div className="h-48" />
          <div className="max-w-7xl	">
            <div className="flex justify-between">
              <h1 className="text-5xl	mb-10 text-bold">BIO</h1>
              <p>
                🏃 Follow me on{" "}
                <a href="https://twitter.com/devrajaosama">Twitter</a>,{" "}
                <a href="https://www.linkedin.com/in/rajaosama/">Linkedin</a>,{" "}
                <a href="https://github.com/Raja0sama">Github</a>,{" "}
                <a href="https://supersami.medium.com/">Medium</a>.
              </p>
            </div>
            <p className="text-xl mb-10 text-gray-300	">
              a multi-talented Human being, a self-proclaimed Best Developer in
              the world, A Javascript enthusiast, A Rockstar programmer,
              Currently living in Karachi~Pakistan. I have worked my ass off for
              the past 5 years in the tech world, mostly for startups and as a
              freelancer, created tons of landing pages, websites, mobile
              applications along the way, as well as dropped my bachelor's
              degree, failed my startup, and created huge, unrealistic
              expectations of self.
            </p>
            <p className="text-xl mb-10 text-gray-300	">
              The Abundant energy I have fuels me in the pursuit of various
              interests, hobbies, areas of studies, and artistic endeavors. I am
              a fast learner who adapts quickly to change and eager to learn new
              methods and procedures, whether it is a cultural change or a
              work-related one
            </p>
            <p className="text-xl mb-10 text-gray-300	">
              I am an adventurer, I want to travel the world, I am fascinated by
              the beauty of the Earth. The goal is to travel and to get me into
              a recursive infinite loop of traveling, living the moment and
              working in a location for a certain period and then move to the
              next one. Not just the world I am fascinated by SPACE, everything
              about space and distant planets and the countless stars fascinate
              me in a way that I can’t put into words.
            </p>
            <p className="text-xl mb-10 text-gray-300	">
              As a Programmer, I would like to call myself a Tech Agnostic
              Polyglot Programmer, One who can adapt and learn and change
              according to the surrounding.
            </p>
            <p className="text-xl mb-10 text-gray-300	">
              I'm usually focused on, 🎛️ Designing great User interfaces.
              experience 🌐 Developing full-stack websites that scales ✨
              Developing backend and structuring databases. 🧰 Building
              Libraries and writing Technical blogs. In my work, I value, ⏱️
              Efficiency 🎯 Consistency ♻️ Reusability ⚙️ Systems 📋 Standards
              🤖Automation 💠 Modular Design 👍 Emoji Lists
            </p>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
