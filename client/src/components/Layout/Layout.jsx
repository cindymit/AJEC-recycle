import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout-div">
      <Nav user={props.user}/>
      <div className="layout-children">{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
