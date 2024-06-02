import "../layout/Content/Content.css";
import ContentTop from "../Components/ContentTop/ContentTop";
import ContentMain from "./ContentMain";
import { SidebarProvider } from "../context/sidebarContext";

const Content = () => {
  return (
    <div className="main-content">
      <SidebarProvider>
        <ContentTop />
        <ContentMain />
      </SidebarProvider>
    </div>
  );
};

export default Content;
