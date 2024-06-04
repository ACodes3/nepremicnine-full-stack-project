import { useState, useEffect } from "react";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { navigationLinks } from "../../data/data"; 
import { Link } from "react-router-dom";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [pageTitle, setPageTitle] = useState("Home");
  const [buttonLabel, setButtonLabel] = useState("Add");
  const [buttonLink, setButtonLink] = useState("/");

  useEffect(() => {
    // Extract the current URL
    const currentUrl = window.location.pathname;

    // Find the corresponding title from navigationLinks
    const link = navigationLinks.find((link) => link.url === currentUrl);

    // Update the page title if a matching link is found
    if (link) {
      setPageTitle(link.title);
      setButtonLabel(link.buttonLabel);
      setButtonLink(link.buttonLink);
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
        <Link to={buttonLink}>
          <button
            style={{
              marginLeft:"10px",
              background: "#ff7920",
              padding: "10px",
              borderRadius: "20px",
              width: "max-content",
              cursor: "pointer",
              color: "white",
            }}
          >
            {buttonLabel}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentTop;
