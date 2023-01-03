import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";
import Spacer from "../components/Spacer";

const HeaderFooterLayout = ({ title, children, ...rest }) => {
  return (
    <>
      <PageHead title={title} />
      <Header />
      <main {...rest}>{children}</main>
      <Spacer />
      <Footer />
    </>
  );
};

export default HeaderFooterLayout;
