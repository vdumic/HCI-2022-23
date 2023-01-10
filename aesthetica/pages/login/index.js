import LoginForm from "../../components/LogIn/LoginForm";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";

const LogIn = () => {
  return (
    <HeaderFooterLayout title="Aesthetica / SignUp">
      <div className="flex justify-center mt-10">
        <p className="font-medium text-2xl">
          Login into your Aesthetica account
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-start my-10">
        <LoginForm />
      </div>
    </HeaderFooterLayout>
  );
};

export default LogIn;
