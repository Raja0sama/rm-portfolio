export function Education({ data }) {
  return (
    <div className={"flex "}>
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
      <div className={"px-10 text-base"}>
        {data.list.map((e) => (
          <div className={"mb-10"}>
            <p>
              <span>{e.range}</span>
              <span className={"text-gray-300	font-thin	"}>{e.company}</span>
            </p>
            <p className={"text-gray-300	text-md font-extralight	"}>{e.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
