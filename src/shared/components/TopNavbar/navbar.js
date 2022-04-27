import React, { useState } from 'react';
import './navbar.scss';
import CustomText from '../customtext/customtext';
import Dropdown from '../dropdown/dropdown';
import user_image from '../../../assets/images/collage-1.jpg';

import { CheckAll, Bell } from 'react-bootstrap-icons';
import { colorScheme } from '../../../default';
import Height from '../height/height';
import { Link } from 'react-router-dom';

const notificationsDropdownStyle = {
  right: 0,
  marginRight: '5px',
  marginTop: '35px',
  width: '340px',
  padding: '15.5px',
};
const profileDropdownStyle = {
  right: 0,
  width: '180px',
  marginTop: '20px',
  paddingTop: '19px',
  paddingLeft: '22px',
  paddingBottom: '10px',
};

function Navbar({ ...props }) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsDropdownOpen, setNotificationsDropdownOpen] = useState(false);

  const profileDropdownHandler = () => {
    if (!profileDropdownOpen) {
      setNotificationsDropdownOpen(false);
    }
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const notificationsDropdownHandler = () => {
    if (!notificationsDropdownOpen) {
      setProfileDropdownOpen(false);
    }
    setNotificationsDropdownOpen(!notificationsDropdownOpen);
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return (
    <div className="navbar">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>

      <div className="user-info">
        <div className="location-date-wrapper">
          <div className="location row">
            <CustomText type="span" size={17}>
              Arizona, United States
            </CustomText>
          </div>
          <div className="date row">
            <CustomText type="span" size={12}>
              12:15 PM at November 2021
            </CustomText>
          </div>
        </div>
        <div className="notifications-wrapper" onClick={notificationsDropdownHandler}>
          <div className="bell-wrapper hoverPointer">
            <Bell size={15} />
            <span className="_status"></span>
          </div>
          {notificationsDropdownOpen && (
            <Dropdown style={notificationsDropdownStyle}>
              <div className="bootstrap-wrapper" onClick={stopPropagation}>
                <div className="row">
                  <div className="col-6">
                    <CustomText type="span" size={14} bold={true}>
                      Messages
                    </CustomText>
                  </div>
                  <div className="col-6 mark-as-done">
                    <CustomText type="span" size={14} className="right hoverPointer">
                      <CheckAll />
                      <span>Mark as read</span>
                    </CustomText>
                  </div>
                </div>

                <div className="row notifs">
                  <div className="col-12">
                    <div className="notification">
                      <Height val={8} />
                      <div className="row">
                        <span className="status"></span>
                        <CustomText type="span" bold={true} size={13.5}>
                          Earn more with more tools now
                        </CustomText>
                      </div>
                      <div className="row">
                        <CustomText type="span" size={12} className="time">
                          Jul 23, 2001 at 09:15 AM
                        </CustomText>
                      </div>
                      <div className="row">
                        <hr className="notification-divider" />
                      </div>
                    </div>

                    <div className="notification">
                      <Height val={8} />
                      <div className="row">
                        <span className="status"></span>
                        <CustomText type="span" bold={true} size={13.5}>
                          Earn more with more tools now
                        </CustomText>
                      </div>
                      <div className="row">
                        <CustomText type="span" size={12} className="time">
                          Jul 23, 2001 at 09:15 AM
                        </CustomText>
                      </div>
                      <div className="row">
                        <hr className="notification-divider" />
                      </div>
                    </div>

                    <div className="notification">
                      <Height val={8} />
                      <div className="row">
                        <span className="status"></span>
                        <CustomText type="span" bold={true} size={13.5}>
                          Earn more with more tools now
                        </CustomText>
                      </div>
                      <div className="row">
                        <CustomText type="span" size={12} className="time">
                          Jul 23, 2001 at 09:15 AM
                        </CustomText>
                      </div>
                      <div className="row">
                        <hr className="notification-divider" />
                      </div>
                    </div>

                    <div className="row view-all-messages">
                      <CustomText
                        type="p"
                        color={colorScheme.primary}
                        size={14.8}
                        className="hoverPointer"
                      >
                        View all messages
                      </CustomText>
                    </div>
                  </div>
                </div>
              </div>
            </Dropdown>
          )}
        </div>
        <div className="profile-wrapper hoverPointer" onClick={profileDropdownHandler}>
          <img src={user_image} className="round" width={`44px`} />
          {profileDropdownOpen && (
            <Dropdown style={profileDropdownStyle}>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    Profile
                  </CustomText>
                </Link>
              </div>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    Vehicles
                  </CustomText>
                </Link>
              </div>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    Promotions
                  </CustomText>
                </Link>
              </div>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    History
                  </CustomText>
                </Link>
              </div>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    Payments
                  </CustomText>
                </Link>
              </div>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    Messages
                  </CustomText>
                </Link>
              </div>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    Settings
                  </CustomText>
                </Link>
              </div>
              <div className="profile-dropdown-option">
                <Link to="/app/dashboard" className="link">
                  <CustomText type="span" size={14.5} color={colorScheme.black}>
                    Log out
                  </CustomText>
                </Link>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
