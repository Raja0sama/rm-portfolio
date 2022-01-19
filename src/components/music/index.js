import React, { useEffect, useRef } from "react";

import ReactAudioPlayer from "react-audio-player";

export default ({ setmouseMove }) => {
  useEffect(() => {
    document.body.addEventListener("mousemove", function () {
      document.getElementById("music").play();
    });
  }, []);
  return (
    // <div />
    <ReactAudioPlayer id={"music"} loop src="/music.mp3" autoPlay={true} />
  );
};
