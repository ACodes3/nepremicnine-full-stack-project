import { useEffect, useState, useContext } from 'react';
import { personsImgs, iconsImgs } from '../../utils/images'; // Ensure this import contains the necessary images
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { SidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  const handleLinkClick = (event, idx) => {
    event.preventDefault();
    setActiveLinkIdx(idx);
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">alice-doe</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {
            navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a 
                  href="#" 
                  className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}
                  onClick={(event) => handleLinkClick(event, navigationLink.id)}
                >
                  <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
