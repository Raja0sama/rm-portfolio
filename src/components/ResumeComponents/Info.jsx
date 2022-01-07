export function Info() {
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
        <p className={"tracking-widest"}>INFO</p>
      </div>
      <div className={"px-10 text-base"}>
        <span className={"tracking-widest text-xl text-center"}>
          Raja Osama
          <span className={"text-gray-300	font-thin	"}> ,22, ♂</span>
        </span>
        <p>
          <span>Email - </span>
          <span className={"text-gray-300	font-thin	"}>
            contact@rajaosama.com
          </span>
        </p>
        <p>
          <span>LinkedIn - </span>
          <span className={"text-gray-300	font-thin	"}>@rajaosama</span>
        </p>
        <p>
          <span>Github - </span>
          <span className={"text-gray-300	font-thin	"}>@raja0sama</span>
        </p>
        <p>
          <span>Medium - </span>
          <span className={"text-gray-300	font-thin	"}>@supersami</span>
        </p>
      </div>
    </div>
  );
}
