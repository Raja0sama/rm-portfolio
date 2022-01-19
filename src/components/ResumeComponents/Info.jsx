export function Info({ data }) {
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
      <div className={"px-10 text-base"}>
        <span className={"tracking-widest text-xl text-center"}>
          {data.name}
          <span className={"text-gray-300	font-thin	"}>{data.age}</span>
        </span>
        {data.list.map((e) => (
          <p>
            <span>{e[0]}</span>
            <span className={"text-gray-300	font-thin	"}>{e[1]}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
