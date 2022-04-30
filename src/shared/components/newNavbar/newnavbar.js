import { useContext } from 'react';
import { List } from 'react-bootstrap-icons';
import { logoBlue } from '../../../entryFile/images';
import InitialContext from '../../context/initialcontext';
import NavbarProfile from '../navbar/NavbarProfile';

const NewNavbar = ({ title, subtitle, showSub = true }) => {
  const { setMobileToggleMenu, mobileToggleMenu, isSmallerThanLgScreen } =
    useContext(InitialContext);

  return (
    <div className="px-2 w100">
      <div className="my-2 d-flex justify-content-between align-items-center">
        {isSmallerThanLgScreen ? (
          <List size={28} className="mx-2" onClick={() => setMobileToggleMenu(!mobileToggleMenu)} />
        ) : (
          <img src={logoBlue} width="150" />
        )}
        <div>
          <NavbarProfile />
        </div>
      </div>
      {showSub && (
        <div className="bread-crumb mx-2">
          <h3 className="dashboard-title">{title || null}</h3>
          <div className="d-flex">
            <span className="dashboard-greetings" style={{ marginRight: '10px' }}>
              {subtitle || null}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewNavbar;
