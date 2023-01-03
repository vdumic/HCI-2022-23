import Header from "../components/Header";
import Footer from "../components/Footer";

const HeaderFooterLayout = ({ title, children, ...rest }) => {
  return (
    <>
      <Header />
      <main {...rest}>{children}</main>
      <Footer />
    </>
  );
};

export default HeaderFooterLayout;
