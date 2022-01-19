export function Bio({ data }) {
  console.log({ data });
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
        <p
          className={"text-gray-300	font-thin	"}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
}
