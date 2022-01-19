export function Projects({ data }) {
  return (
    <div className={"flex mt-10 "}>
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
        className={"pt-10 text-xl flex justify-center"}
      >
        <span className={"tracking-widest"}>{data.title}</span>
      </div>
      <div>
        {data.list.map((e) => (
          <div className={"px-10 pt-5"}>
            <p className={"text-gray-100	text-lg font-extralight	"}>{e.title}</p>
            <p className={"text-gray-400	text-basic font-extralight	"}>
              {e.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
