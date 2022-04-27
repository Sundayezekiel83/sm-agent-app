import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './sidebar.scss';
import { ChevronDown, ChevronUp, List, Plus, PlusCircle } from 'react-bootstrap-icons';
import Height from '../height/height';
import { colorScheme, sudoUserType } from '../../../default';
import { useMediaQuery } from 'react-responsive';
import { gridBreakpoints } from '../../../default';
import PullUp from '../pullup/pullup';
import { appPages } from '../../../router_service';
import { Link } from 'react-router-dom';
// import { userTypes } from '../../utils/userTypes';

function Sidebar({ ...props }) {
  const location = useLocation();
  const { pathname } = location;

  const splitLocation = pathname.split('/');

  const [minimize, setMinimize] = useState(false);
  const [showAddBusiness, setShowAddBusiness] = useState(false);

  const isSmallerThanLgScreen = useMediaQuery({ query: `(max-width: ${gridBreakpoints.lg})` });
  const isSmallerThanMdScreen = useMediaQuery({ query: `(max-width: ${gridBreakpoints.md})` });

  useEffect(() => {
    if (isSmallerThanLgScreen) {
      setMinimize(true);
    } else {
      setMinimize(false);
    }
    if (!isSmallerThanMdScreen) {
      props.setCols(props.defaultCols);
    }
  }, [isSmallerThanLgScreen, isSmallerThanMdScreen]);

  const toggleMinimize = () => {
    setMinimize(!minimize);
    if (!minimize) {
      if (isSmallerThanMdScreen) {
        props.setCols(props.defaultCols);
      } else {
        props.setCols({
          sidebarCol: 'col-0half paddingNone',
          mainCol: 'col-11half paddingNone',
        });
      }
    } else {
      if (isSmallerThanMdScreen) {
        props.setCols({
          sidebarCol: 'col-12 paddingNone',
          mainCol: 'paddingNone',
        });
      } else {
        props.setCols(props.defaultCols);
      }
    }
  };

  const checkPermission = permission => {
    if (permission == undefined) {
      return true;
    } else {
      if (permission.includes(sudoUserType)) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className="sidebar">
      <div className="inner-bar">
        <div className={`header`}>
          {/* {!minimize && <Logo width={100} className={`sidebar-logo`} />} */}
          <div className="sidebar-logo"></div>
          <List
            size={35}
            color="black"
            className={`hoverPointer d-none d-md-block ${minimize && 'left adjust-menu-bar'}`}
            onClick={toggleMinimize}
          />
        </div>
        <Height val={7} />
        <div className="ppaction">
          {/* <div className="profile-holder">
            <div
              className="name-circle"
              onClick={minimize && (() => setShowAddBusiness(!showAddBusiness))}
            >
              <span>Godson</span>
            </div>
            <div className={`detail-holder ${minimize && 'd-none'}`}>
              <h4 className="position">Developer</h4>
              <h5 className="name">Nwankwo Godson</h5>
            </div>
            <div
              className={`caret-icon ${minimize && 'd-none'}`}
              onClick={() => setShowAddBusiness(!showAddBusiness)}
            >
              {!showAddBusiness ? (
                <ChevronDown size={20} color="black" />
              ) : (
                <ChevronUp color="black" size={20} />
              )}
            </div>
          </div>

          {
            <div className={`business-wrapper ${!showAddBusiness ? 'hide' : ''}`}>
              <div className="d-flex justify-content-center align-items-center add-action">
                <Link to="/addbusiness" className={`link`} style={{ color: '' }}>
                  <Plus size={20} className={`plus-icon ${minimize && 'd-none'}`} />
                  {minimize && <span>ADD</span>}
                  {!minimize && <span>Add Business</span>}
                </Link>
              </div>
            </div>
          } */}
        </div>
        <Height val={20} />

        <div className="main">
          {!minimize ? (
            // <CustomText
            //   type="h3"
            //   size={minimize ? 12 : 13.5}
            //   color={colorScheme.sidebarSectionTitleColor}
            // >
            //   MAIN
            // </CustomText>
            <>
              <PullUp val={20} />
            </>
          ) : (
            <PullUp val={20} />
          )}
          <Height val={20} />

          {appPages.map((page, key) => {
            if (page.sidebar) {
              if (!page.bottom) {
                if (checkPermission(page.permission)) {
                  return (
                    <React.Fragment key={key}>
                      <Link className="linkFree" to={!page.multiple && page.path}>
                        <div
                          className={`option ${minimize && 'justify-content-center'} ${
                            `/${splitLocation[1]}` === page.path ? `active-navlink` : ''
                          }`}
                        >
                          {page.icon}
                          {!minimize && <span>{page.label}</span>}
                          {page.label === 'Message' && <span className="messagesNum">10</span>}
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                }
              }
            }else{
              return;
            }
          })}
        </div>
        <Height val={minimize ? 9.8 : 14.5} />
        {/* <div className="settings">
          {!minimize ? (
            <CustomText
              type="h3"
              size={minimize ? 11.5 : 13.5}
              color={colorScheme.sidebarSectionTitleColor}
            >
              <span style={minimize ? { marginLeft: '-5.6px' } : {}}>
                {sudoUserType != userTypes.Admin ? 'NOTIFICATIONS' : 'SETTINGS'}
              </span>
            </CustomText>
          ) : (
            <PullUp val={9.5} />
          )}
          <Height val={20} />
          {appPages.map(page => {
            if (page.sidebar) {
              if (page.bottom) {
                if (checkPermission(page.permission)) {
                  return (
                    <>
                      <Link className="linkFree" to={!page.multiple && page.path}>
                        <div className="option">
                          {page.icon}
                          {!minimize && <span>{page.label}</span>}
                          {page.label == 'Message' && <span className="messagesNum">10</span>}
                        </div>
                      </Link>
                    </>
                  );
                }
              }
            }
          })}
        </div> */}
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
