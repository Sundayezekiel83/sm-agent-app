import { sudoUserType } from '../default';
import { Login } from '../pages/auth/login/login';
import { Register } from '../pages/auth/register/register';
import AdminDashboard from '../pages/mainpages/admin/dashboard/admindashboard';
import Customer from '../pages/mainpages/customer/customer';
import AppLayout from '../pages/shared/applayout/applayout';
import { userTypes } from '../shared/utils/userTypes';
import MyProperties from '../shared/components/myproperties/MyProperties';

const roleComponent = ({ CustomerComponent, LogisticComponent, AdminComponent }) => {
  if (sudoUserType === userTypes.Customer) {
    return CustomerComponent;
  } else if (sudoUserType === userTypes.Logistic) {
    return LogisticComponent;
  } else {
    return AdminComponent;
  }
};

export const pages = [
  {
    path: '/login',
    exact: true,
    component: Login,
    guarded: false,
    // permission: [userTypes.Admin, userTypes.Customer],
  },
  {
    path: '/register',
    exact: true,
    component: Register,
    guarded: false,
    // permission: [userTypes.Admin, userTypes.Customer],
  },

];

export const appPages = [
  {
    label: 'Dashboard',
    path: '/',
    exact: true,
    children: roleComponent({
      AdminComponent: AppLayout({})(AdminDashboard),
    }),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-apps"></i>,
  },
  {
    label: 'Products',
    path: '/products',
    exact: true,
    children: AppLayout({})(Customer),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-package"></i>,
    permission: [userTypes.Customer, userTypes.Admin],
    options: [
      {
        label: 'Add Product',
        path: '/add-product',
      },
    ],
  },

  {
    label: 'Properties',
    path: '/properties',
    exact: true,
    children: AppLayout({})(MyProperties),
    sidebar: true,
    guarded: true,
    icon: <i className="fi fi-rr-package"></i>,
    permission: [userTypes.Customer, userTypes.Admin],
    options: [
      {
        label: 'Add Property',
        path: '/add-property',
      },
    ],
  },


];

export const routes = [...appPages, ...pages];

// export default [
//   {
//     path: 'dashboard',
//     component: DasboardSelector,
//   },
//   {
//     path: 'test',
//     component: ForgetPassword,
//   },
//   {
//     path: 'doctors',
//     component: AllDoctors,
//   },
//   {
//     path: 'chat',
//     component: Chat,
//   },
//   {
//     path: 'patient-record-details',
//     component: PatientRecordDetails,
//   },
//   {
//     path: 'tenants',
//     component: Tenants,
//   },
//   {
//     path: 'appointments',
//     component: DoctorAppointment,
//   },

//   {
//     path: 'all-drugs',
//     component: GetAllDrugs,
//   },
//   {
//     path: 'all-withdrawals',
//     component: AllWithdrawal,
//   },
//   {
//     path: 'appointments/',
//     component: Appointment,
//   },

//   {
//     path: 'withdrawal/',
//     component: WithDrawal,
//   },
//   {
//     path: 'laborders',
//     component: LabOrders,
//   },
//   {
//     path: 'transactions',
//     component: Transactions,
//   },
//   {
//     path: 'all-appointments',
//     component: AdminAppointment,
//   },
//   {
//     path: 'profile',
//     component: UserProfile,
//   },
//   {
//     path: 'orders',
//     component: Orders,
//   },
//   // {
//   //   path: 'settings',
//   //   component: Settings,
//   // },
// ];
