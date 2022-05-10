import React from 'react';
import './Navbar.scss';
import DefaultDropdown from '../dropdown/Dropdown';
import user_menu from '../../../assets/jsondata/user_menus.json';
import notifications from '../../../assets/jsondata/notification.json';
import { Link } from 'react-router-dom';
// import { useAuthState } from '../../context/useAuthContext';
import DefaultPic from '../../../assets/images/default-picture.jpg';
import user from '../../../data/user.json';
import logoblue from '../../../assets/images/logo-blue.png';

const NavbarProfileIcons = ({ sidebarOpen, openSidebar }) => {
  // const { user } = useAuthState();
  const imageurl = 'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg';
  const renderUserToggle = user => (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">{user.firstname}</div>
    </div>
  );

  const renderUserMenu = (item, index) => (
    <Link to="/" key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );

  const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  );

  const curr_user = {
    display_name: user.user.name,
    image: DefaultPic,
  };

  return (
    <div className="navbar">
      {/* <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div> */}
      {/* <div className="navbar__left">
        <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a>
        <img src={logoblue} className="navbar__logo" />
      </div> */}
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          {/* <DefaultDropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          /> */}
        </div>
        <div className="topnav__right-item">
          <DefaultDropdown
            icon="fi-rr-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="nav-user d-none d-md-flex">
          <div className="user-image" style={{ backgroundImage: `url('${imageurl}')` }}></div>
          <div className="user-details">
            <h5>Godson</h5>
            <span className="role">Admin</span>
          </div>
        </div>
        {/* <div className="topnav__right-item">
                    <ThemeMenu/>
                </div> */}
      </div>
    </div>
  );
};

export default React.memo(NavbarProfileIcons);
