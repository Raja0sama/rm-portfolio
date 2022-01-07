import { Bio } from "../../components/ResumeComponents/Bio";
import { Education } from "../../components/ResumeComponents/Education";
import { Experience } from "../../components/ResumeComponents/Experience";
import { Info } from "../../components/ResumeComponents/Info";
import { Projects } from "../../components/ResumeComponents/Projects";
import { Skills } from "../../components/ResumeComponents/Skills";

export default function Resume() {
  return (
    <div className={"max-w-screen-lg m-auto min-h-screen pt-20"}>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <img className={"w-9/12 ml-20 border"} src="/cvimage.jpg" />
          <Info />
          <Bio />
          <Skills />
        </div>
        <div>
          <h1 class="text-3xl mb-20">Javascript Full-Stack SSE @atompoint</h1>
          <Education />
          <Experience />
        </div>
      </div>
      <Projects />
    </div>
  );
}
