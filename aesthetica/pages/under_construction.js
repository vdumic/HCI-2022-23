import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import { IoBuild } from "react-icons/io5";

const PageUnderConstruction = () => {
  return (
    <HeaderFooterLayout>
      
     <div className="flex flex-col my-48 mx-24 sm:mx-8 sm:text-xl items-center font-medium text-2xl">
     <IoBuild size={80}/>
  
      <p className="pt-8 pb-8 lg:w-1/2 sm:pb-10 text-center">Building our furniture is easy. Our developers don't think the same about building this page.</p>
      <p className="text-xl text-gray-600 sm:text-sm">Page is under construction. Please check back later.</p>

      </div>
    </HeaderFooterLayout>
  );
};

export default PageUnderConstruction;
