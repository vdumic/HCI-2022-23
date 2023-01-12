import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import InfoCard from "../components/About/InfoCard";
import { AboutInfo } from "../constants/AboutInfo";

const About = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / About">
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div>ABOUT</div>
      <div className="flex mx-24 text-3xl font-semibold">Quick info:</div>
      <div className="flex justify-between max-w-full mx-24 mt-6 mb-20">
        {AboutInfo.map(({ Icon, title, details }) => (
          <InfoCard Icon={Icon} title={title} details={details} key={title} />
        ))}
      </div>
    </HeaderFooterLayout>
  );
};

export default About;
