import { useContext } from "react";

import AppContext from "../../store/app-context";
import LoginForm from "../../components/LogIn/LoginForm";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";

const LogIn = () => {
  const appCtx = useContext(AppContext);

  const handleLogin = () => {
    appCtx.handleLogin();
  };

  return (
    <HeaderFooterLayout title="Aesthetica / LogIn">
      <div className="flex justify-center mt-16 h-full">
        <p className="font-medium text-2xl">Log back into your account.</p>
      </div>
      <div className="w-full flex flex-col items-center justify-start my-10 mb-28">
        <LoginForm handleLogin={handleLogin} />
      </div>
    </HeaderFooterLayout>
  );
};

export default LogIn;
