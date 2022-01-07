export function Bio() {
  return (
    <div className={"flex mt-10"}>
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
        className={"pt-10 text-xl flex justify-center"}
      >
        <p className={"tracking-widest"}>BIO</p>
      </div>
      <div className={"px-10 text-base"}>
        <p className={"text-gray-300	font-thin	"}>
          Hey, I'm Raja Osama, A Rockstar programmer, Currently living in
          Karachi~Pakistan. If you are looking for a developer, I am currently
          exploring job opportunities, feel free to contact me.
        </p>
        <p className={"text-gray-300	font-thin	mt-5"}>
          I love programming, and i have been doing it since i was 12 years old,
          i have plenty websites that are dated back to 2012, when i used to use
          blogger platform and share gaming contents. I am passionate about
          programing and in the past 5 years, i have worked with alot of
          projects, frameworks, and languages. In my spare time i usually
          program, explore new frameworks and write technical blogs and my
          experiences with technologies and guides.
        </p>
      </div>
    </div>
  );
}
