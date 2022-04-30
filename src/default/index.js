import { userTypes } from '../shared/utils/userTypes';

// const sudoUserType = 'admin';
const sudoUserType = userTypes.Admin;

const colorScheme = {
  primary: '#2db2ff',
  faintPrimary: '#2db2ff19',
  faintPrimary2: '#bce0fd',
  faintPrimary3: '#6c63ff19',
  faintPrimary4: '#2db2ff',
  darkPrimary: '#2699fb',
  darkPrimary2: '#6c63ff',

  danger: '#ea3a3d',
  faintDanger: '#ea3a3d3f',
  faintDanger2: '#EA3A3D19',
  faintDanger3: '#ea3a3d', // new

  success: '#1AD598',
  faintSuccess: '#1AD5981A',
  faintSuccess2: '#1ad598',

  gray: '#06152B7F',
  darkGray: 'darkgrey',
  darkGray2: '#06152b19',

  orange: '#F9B959',
  faintOrange: '#F9B9591A',
  faintOrange2: '#f9b959', // new

  white: '#ffffff',
  black: 'black',

  darkBackground: '#06152b',
  whiteBackground: '#ffffff',
  modalBodyBackground: '#06152B7F',
  grayBackground: '#f1f1f1',

  border: '#06152b',
  border2: '#06152B3F',
  border3: '#00000029',

  sidebarSectionTitleColor: '#616161',
};

const gridBreakpoints = {
  xs: '575px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export { sudoUserType, colorScheme, gridBreakpoints };
