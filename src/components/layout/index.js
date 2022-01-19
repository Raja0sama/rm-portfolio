import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import A from "../../components/bg";
import { Link } from "react-router-dom";
import Static from "../../portfolio_static";
import theme from "../../theme";

export default (props) => {
  const { layout } = Static;
  const controls = useAnimation();
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      x: 0,
      z: 4,
      y: 0,
      transition: { delay: 0.3 },
    }));
  }, []);

  const p = layout.left.reduce((acc, curr) => {
    acc[curr.url] = (
      <Link className="vertical-rotate" to={curr.url}>
        {curr.label}
      </Link>
    );
    return acc;
  }, {});

  const a = [...layout?.right, ""].map((e, i) =>
    layout?.right.length === i ? (
      <img
        src={"/sound.gif"}
        style={{
          width: 35,
          padding: 5,
        }}
      />
    ) : e?.link ? (
      <Link className="vertical-rotate" to={e.url}>
        {e.label}
      </Link>
    ) : (
      <a className="vertical-rotate" href={e.url}>
        {e.label}
      </a>
    )
  );

  const [pages, setPages] = useState(p);

  return (
    <main
      className="relative h-screen w-screen"
      style={{
        zIndex: 10,
        background: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      {/* Background Effect */}
      {!props.disableExtra && (
        <motion.div
          animate={controls}
          style={{ opacity: 0, zIndex: -1 }}
          custom="5"
          className="fixed h-full w-full pointer-events-none	"
        >
          <A />
        </motion.div>
      )}
      <div className="flex w-screen h-screen">
        {!props.disableExtra && (
          <div className="flex flex-col justify-between">
            <motion.div
              animate={controls}
              style={{ opacity: 0, zIndex: 99 }}
              custom="4"
              className="h-full flex justify-center"
            >
              <div
                className="h-full  mb-1 w-1"
                style={{
                  background: theme.textColor,
                }}
              />
            </motion.div>
            <div>
              {Object.entries(pages).map((e, i) => (
                <motion.div
                  layoutId={e[0]}
                  animate={controls}
                  style={{ opacity: 0, zIndex: 99 }}
                  custom={i}
                  className="p-4 "
                >
                  {e[1]}
                </motion.div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full">{props.children}</div>
        {!props.disableExtra && (
          <div className="flex flex-col justify-between border-l-4">
            {a.map((e, i) => (
              <motion.div
                animate={controls}
                style={{ opacity: 0, zIndex: 99 }}
                custom={i}
                className="p-4 "
              >
                {e}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
