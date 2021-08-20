import {
  GET_USERS,
  GET_DEVICES,
  TOGGLE_LOCK,
  ACCESS_FROM,
  SUCCESS,
  FAILURE,
  REQUEST,
  userAPI,
  devicesAPI,
} from "./constants";

export const toggleLock = (payload) => ({
  type: TOGGLE_LOCK,
  payload,
});

export const showAccessForm = (payload) => ({
  type: ACCESS_FROM,
  payload,
});



export const getUsers = () => async (dispatch) => {
  const type = GET_USERS;

  dispatch({ type: type + REQUEST });
  let response;
  try {
    response = await fetch(userAPI);
  } catch (error) {
    dispatch({ type: type + FAILURE, error });
  }

  if (!response.ok) {
    const errorResData = await response.json();
    throw new Error(errorResData.error.message);
  }

  const responseData = await response.json();
  return dispatch({ type: type + SUCCESS, payload: responseData });
};

export const getDevices = () => async (dispatch) => {
  const type = GET_DEVICES;

  dispatch({ type: type + REQUEST });
  let response;
  try {
    response = await fetch(devicesAPI);
  } catch (error) {
    dispatch({ type: type + FAILURE, error });
  }

  if (!response.ok) {
    const errorResData = await response.json();
    throw new Error(errorResData.error.message);
  }

  const responseData = await response.json();
  return dispatch({ type: type + SUCCESS, payload: responseData });
};
