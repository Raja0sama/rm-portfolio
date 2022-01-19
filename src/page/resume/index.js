import { Bio } from "../../components/ResumeComponents/Bio";
import { Education } from "../../components/ResumeComponents/Education";
import { Experience } from "../../components/ResumeComponents/Experience";
import { Info } from "../../components/ResumeComponents/Info";
import Layout from "../../components/layout";
import { Projects } from "../../components/ResumeComponents/Projects";
import { Skills } from "../../components/ResumeComponents/Skills";

export default ({ data }) => {
  return (
    <Layout disableExtra>
      <div
        className={
          "max-w-screen-lg m-auto min-h-screen pt-20 overflow-auto h-screen"
        }
      >
        <div class="grid grid-cols-2 gap-4">
          <div>
            <img className={"w-9/12 ml-20 border"} src="/cvimage.jpg" />
            <Info data={data.info} />
            <Bio data={data.bio} />
            <Skills data={data.skills} />
          </div>
          <div>
            <h1 class="text-3xl mb-20">{data.title}</h1>
            <Education data={data.education} />
            <Experience data={data.experience} />
          </div>
        </div>
        <Projects data={data.projects} />
      </div>
    </Layout>
  );
};
