import { doctorAction } from './doctoractionTypes';

const { DoctorSuccess, DoctorFail, DoctorAddAccount } = doctorAction;

export const AppActionSuccess = payload => {
  return {
    type: DoctorSuccess,
    payload: payload,
  };
};

export const AppActionFailed = payload => {
  return {
    type: DoctorFail,
    payload: payload,
  };
};
