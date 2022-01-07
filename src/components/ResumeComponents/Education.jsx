export function Education() {
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
        <span className={"tracking-widest"}>EDUCATION</span>
      </div>
      <div className={"px-10 text-base"}>
        <div className={"mb-10"}>
          <p>
            <span>2021 : Present - </span>
            <span className={"text-gray-300	font-thin	"}>
              Middlesex University Dubai
            </span>
          </p>
          <p className={"text-gray-300	text-md font-extralight	"}>
            Bachelor of Science - BS, Information Technology
          </p>
        </div>
        <div className={"mb-10"}>
          <p>
            <span>2017 : 2020 - </span>
            <span className={"text-gray-300	font-thin	"}>
              Aptech Pakistan, @Karachi
            </span>
          </p>
          <p className={"text-gray-300	text-md font-extralight	"}>
            Advance Diploma In Software Engineering, Computer Software
            Engineering
          </p>
        </div>
        <div className={"mb-10"}>
          <p>
            <span>2017 : 2019 - </span>
            <span className={"text-gray-300	font-thin	"}>
              CMS Collage, @Karachi
            </span>
          </p>
          <p className={"text-gray-300	text-md font-extralight	"}>
            Higher Secondary - Pre-Engineering
          </p>
        </div>
        <div className={"mb-10"}>
          <p>
            <span>2017 : 2019 - </span>
            <span className={"text-gray-300	font-thin	"}>
              ACE School, @Karachi
            </span>
          </p>
          <p className={"text-gray-300	text-md font-extralight	"}>
            Higher Secondary - Computer Science
          </p>
        </div>
      </div>
    </div>
  );
}
