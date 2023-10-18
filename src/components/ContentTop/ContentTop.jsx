// import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { logo } from "../../assets/images";
// import { SidebarContext } from "../../context/sidebarContext";

const ContentTop = () => {
//   const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <h3 className="content-top-title">Hello Pinky,</h3>
        </div>
        <div className="content-top-btns">
            <button className="notification-btn content-top-btn">
                <img src={ logo } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop
