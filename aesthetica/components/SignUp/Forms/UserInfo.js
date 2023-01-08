import { useContext } from "react";
import { FormContext } from "../../../pages/signup/index";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { SlArrowRight } from "react-icons/sl";
import * as yup from "yup";

const UserInfo = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-500">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    phone: yup.number().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.number().required(),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        phone: "",
        street: "",
        city: "",
        zipcode: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col w-full justify-center items-center">
        <div className="flex w-1/4 justify-between">
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-black">Name:</label>
            <Field name="name" className="border-2 py-2" />
            <ErrorMessage name="name" render={renderError} />
          </div>

          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-black">Surname:</label>
            <Field name="surname" className="border-2 py-2" />
            <ErrorMessage name="surname" render={renderError} />
          </div>
        </div>

        <div className="flex flex-col w-1/4 items-start mb-2">
          <label className="font-medium text-black">Phone number:</label>
          <Field name="phone" className="border-2 py-2 w-full" />
        </div>
        <ErrorMessage name="phone" render={renderError} />

        <div className="flex flex-col w-1/4 items-start mb-2">
          <p className="text-2xl my-4">Shipping information:</p>
          <label className="font-medium text-black">Street:</label>
          <Field name="street" className="border-2 py-2 w-full" />
        </div>
        <ErrorMessage name="street" render={renderError} />

        <div className="flex w-1/4 justify-between">
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-black">City:</label>
            <Field name="city" className="border-2 py-2" />
            <ErrorMessage name="city" render={renderError} />
          </div>

          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-black">Zipcode:</label>
            <Field name="zipcode" className="border-2 py-2" />
            <ErrorMessage name="zipcode" render={renderError} />
          </div>
        </div>

        <button
          className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-white text-m font-medium mt-10 py-2 pl-5 pr-3.5 border-2 border-[#252526] rounded-full shadow-xl"
          type="submit"
        >
          Continue
          <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1" />
        </button>
      </Form>
    </Formik>
  );
};

export default UserInfo;
