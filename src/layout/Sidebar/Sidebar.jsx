import {  useState } from 'react';
import { logo } from '../../assets/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { DownOutlined, RightOutlined } from '@ant-design/icons';


const Sidebar = () => {
  const [activeLinkIdx] = useState(1);

  return (
    <div className={ `sidebar ` }>
      <div className="logo-info">
          <div className="info-img img-fit-cover">
              <img src={ logo } alt="profile image" />
          </div>
          <span className="info-name">Dashboard</span>
      </div>

      <nav className="navigation">
          <ul className="nav-list">
            {
              navigationLinks.map((navigationLink, index) => (
                <li className="nav-item" key = { navigationLink.id }>
                  <a href="#" className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                      <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                      <span className="nav-link-text">{ navigationLink.title }</span>
                      {navigationLink.id === activeLinkIdx ? '':<RightOutlined  className='list-icon'/>}
                  </a>
                  
                </li>
              ))
            }
          </ul>
      </nav>
      <div className='user-info'>
          <div className="info-img img-fit-cover">
              <img src={ logo } alt="profile image" />
          </div>
          <span className="info-name">
            <h3>Pinky</h3>
            <p> Frontend Developer</p>
          </span>
          <DownOutlined className='user-info-icon'/>
      </div>
    </div>
  )
}

export default Sidebar
