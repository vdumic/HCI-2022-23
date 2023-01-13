import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import InfoCard from "../components/About/InfoCard";
import { AboutInfo } from "../constants/AboutInfo";

const About = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / About">
      <div className="flex md:mx-24 md:text-3xl md:mb-5 sm:mx-8 sm:mb-3 text-2xl font-semibold">Quick info:</div>
      <div className="grid md:mx-20 mb-10 md:grid-cols-4 justify-items-center gap-y-4">
        {AboutInfo.map(({ Icon, title, details }) => (
          <InfoCard Icon={Icon} title={title} details={details} key={title} />
        ))}
      </div>
    </HeaderFooterLayout>
  );
};

export default About;
