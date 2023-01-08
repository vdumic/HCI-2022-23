import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Steps from "../../components/SignUp/Steps";

const SignUp = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / SignUp">
        <div className="flex justify-center mt-8">
        <p className="font-medium text-2xl">Sign up for faster checkout and personalized shopping experience.</p>
        </div>
        <div className="w-screen h-screen flex flex-col items-center justify-start">
        <Steps />
        </div>
    </HeaderFooterLayout>
  );
}




export default SignUp;
