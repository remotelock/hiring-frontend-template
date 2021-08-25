export type IconTypes = 'Devices' | 'User';

export interface Device {
  attributes: {
    connected_at: string;
    firmware_version: string;
    model_number: string;
    name: string;
    power_source: string;
    programming_code: string;
    serial_number: string;
    state: string;
  };
  id: string;
  type: string;
}

export interface User {
  attributes: {
    device_time_zone: string;
    email: string;
    ends_at: string;
    name: string;
    phone: null;
    pin: string;
    starts_at: string;
    status: 'current' | 'active' | 'upcoming';
  };
  id: string;
  type: string;
}

export type ControllerType = {
  devices?: Device[];
  users?: User[];
  device?: Device;
  user?: User;
};

export type DispatchType = {
  type: ActionTypes;
  data: ControllerType;
};

export type ActionTypes = 'SET_DEVICES' | 'SET_USERS' | 'UPDATE_DEVICE';
