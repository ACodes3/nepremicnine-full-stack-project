import { useState, useEffect } from "react";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { navigationLinks } from "../../data/data"; // Import your navigationLinks data

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [pageTitle, setPageTitle] = useState("Home");

  useEffect(() => {
    // Extract the current URL
    const currentUrl = window.location.pathname;

    // Find the corresponding title from navigationLinks
    const link = navigationLinks.find((link) => link.url === currentUrl);

    // Update the page title if a matching link is found
    if (link) {
      setPageTitle(link.title);
    }
  }, []);

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title">{pageTitle}</h3>
      </div>
      <div className="content-top-btns">
        <button type="button" className="search-btn content-top-btn">
          <img src={iconsImgs.search} alt="" />
        </button>
        <button className="notification-btn content-top-btn">
          <img src={iconsImgs.bell} alt="" />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
