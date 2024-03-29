import { useContext, useEffect } from "react";
import { FormContext } from "../../pages/signup";

const Steps = () => {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-bckgrnd-dark");
      } else {
        step.classList.remove("bg-bckgrnd-dark");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="w-3/5 sm:w-3/4 flex flex-row items-center justify-center lg:px-32 pt-14 pb-12">
      <div className="stepper-item w-12 h-12 text-center pt-2 font-medium border-2 border-gray-400 rounded-full">
        1
      </div>
      <div className="flex-auto border-t-2 border-gray-400"></div>
      <div className="stepper-item w-12 h-12 text-center pt-2 font-medium border-2 border-gray-400 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2 border-gray-400"></div>
      <div className="stepper-item w-12 h-12 text-center pt-2 font-medium border-2 border-gray-400 rounded-full">
        3
      </div>
    </div>
  );
};

export default Steps;
