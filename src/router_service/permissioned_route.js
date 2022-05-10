import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { sudoUserType } from '../default';

const PermissionRoute = ({ ...props }) => {
  let route;
  if (props.component) {
    route = <Route {...props} />;
  } else {
    route = <Route {...props}>{props.children}</Route>;
  }

  const redirect = <Redirect to="/error" />;

  if (props.permissions) {
    if (props.permissions.includes(sudoUserType)) {
      return route;
    } else {
      return redirect;
    }
  } else {
    return route;
  }
};

export default PermissionRoute;





// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { useAuthState } from './../shared/context/useAuthContext';

// const PermissionedRoute = ({ key, path, component, permissions, exact, ...props }) => {
//   const { user } = useAuthState();

//   return !permissions ||
//     permissions.length === 0 ||
//     permissions.some(r => user.permissions?.indexOf(r) >= 0) ? (
//     <Route key={key} path={path} component={component} exact={exact} />
//   ) : (
//     <Redirect to={'/error'} />
//   );
// };

// export default PermissionedRoute;


