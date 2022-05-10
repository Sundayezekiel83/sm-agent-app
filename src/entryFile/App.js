import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '../router_service';
import '../shared/styles/css/bootstrap-grid.css';
import user from '../data/user.json';
import './App.scss';
import '../shared/styles/css/bootstrap-cuts.css';
import '../shared/styles/css/bootstrap-grid.css';
import '../shared/styles/css/materialize-cuts.css';
import PermissionRoute from '../router_service/permissioned_route';
import { InitialProvider } from '../shared/context/initialcontext';
import { useState } from 'react';
import { gridBreakpoints } from '../default';
import { useMediaQuery } from 'react-responsive';

function App() {
  const renderGuardedRoutes = ({ i, ...route }) => {
    if (user.token) {
      return <PermissionRoute key={i} path={route.path} component={route.component} {...route} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  const [userHasBusiness, setUserHasBusiness] = useState(true);
  const isSmallerThanLgScreen = useMediaQuery({ query: `(max-width: ${gridBreakpoints.lg})` });
  const [mobileToggleMenu, setMobileToggleMenu] = useState(false);

  return (
    <InitialProvider
      value={{
        userHasBusiness,
        setUserHasBusiness,
        mobileToggleMenu,
        setMobileToggleMenu,
        isSmallerThanLgScreen,
      }}
    >
      <div className="w100">
        <Router>
          <Switch>
            {routes.map((route, i) =>
              route.guarded ? (
                renderGuardedRoutes({ i, ...route })
              ) : (
                <PermissionRoute key={i} {...route} />
              ),
            )}
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: '/',
                },
              }}
            ></Redirect>
          </Switch>
        </Router>
      </div>
    </InitialProvider>
  );
}

export default App;
