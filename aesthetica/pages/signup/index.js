import { createContext, useState } from "react";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Steps from "../../components/SignUp/Steps";
export const FormContext = createContext();

const SignUp = () => {
  const [activeStepIndex] = useState(0);
  return (
    <HeaderFooterLayout title="Aesthetica / SignUp">
      <div className="flex justify-center mt-8">
        <p className="font-medium text-2xl">
          Sign up for faster checkout and personalized shopping experience.
        </p>
      </div>
      <FormContext.Provider value={{ activeStepIndex }}>
        <div className="w-screen h-screen flex flex-col items-center justify-start">
          <Steps />
        </div>
      </FormContext.Provider>
    </HeaderFooterLayout>
  );
};

export default SignUp;
