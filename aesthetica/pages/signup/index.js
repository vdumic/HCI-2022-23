import { createContext, useState } from "react";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import StepCounter from "../../components/SignUp/StepCounter";
import DisplayedStep from "../../components/SignUp/DisplayedStep";
import Success from "../../components/SignUp/Forms/Success";
export const FormContext = createContext();

const SignUp = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  if (activeStepIndex == 2) {
    return (
      <HeaderFooterLayout title="Aesthetica / SignUp">
        <div className="flex flex-col h-screen items-center pt-20">
          <Success />
          <div className="text-xl font-light pt-5">
            Confirmation email was sent to: {formData.email}
          </div>
        </div>
      </HeaderFooterLayout>
    );
  }

  return (
    <HeaderFooterLayout title="Aesthetica / SignUp">
      <div className="flex justify-center mt-8">
        <p className="font-medium text-2xl">
          Sign up for faster checkout and personalized shopping experience.
        </p>
      </div>
      <FormContext.Provider
        value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
      >
        <div className="w-full h-screen flex flex-col items-center justify-start">
          <StepCounter />
          <DisplayedStep />
        </div>
      </FormContext.Provider>
    </HeaderFooterLayout>
  );
};

export default SignUp;
