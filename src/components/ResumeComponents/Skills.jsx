export function Skills({ data }) {
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
        <p className={"tracking-widest"}>{data.title}</p>
      </div>
      <div className={"pl-10 flex flex-row flex-wrap"}>
        {data.list.map((e) => (
          <span className={"px-2 py-2 m-1 border-2 border-gray-400 font-thin"}>
            {e}
          </span>
        ))}
      </div>
      <div className={"px-10 text-base"}></div>
    </div>
  );
}
