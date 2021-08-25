import React, {useEffect} from 'react';
import {ControllerType, Device, DispatchType, User} from './src/types';
import {callApi} from './src/utils/api';

const initialState: ControllerType = {
  devices: undefined,
  users: undefined,
};

function reducer(state: ControllerType, action: DispatchType) {
  switch (action.type) {
    case 'SET_DEVICES':
      return {
        ...state,
        devices: action.data.devices,
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.data.users,
      };
    case 'UPDATE_DEVICE':
      return {
        ...state,
        devices: state.devices?.map(device => {
          if (device.id === action.data.device?.id) {
            return action.data.device;
          }
          return device;
        }),
      };
    default:
      return state;
  }
}

const useController = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  useEffect(() => {
    callApi('/devices.json').then((data: {data: Device[]}) => {
      dispatch({type: 'SET_DEVICES', data: {devices: data.data}});
    });
    callApi('/users.json').then((data: {data: User[]}) => {
      dispatch({type: 'SET_USERS', data: {users: data.data}});
    });
  }, []);

  return {state, dispatch};
};

export default useController;
