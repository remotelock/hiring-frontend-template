import moment from 'moment';
export const API_END_POINT = 'http://localhost:4000/api/';
export const API_USERS = API_END_POINT + 'users.json';
export const API_DEVICES = API_END_POINT + 'devices.json';

export const COLORS = {
  GRAY: '#a6a6a9',
  WHITE: '#ffffff',
  GREEN: '#4fd262',
  RED: '#d2584f',
  USER_STATUS: {
    current: '#d2584f',
    active: '#3d6d21',
    upcoming: '#7e6513',
  },
};

export const DEVICE_STATUS = {
  LOCKED: 'locked',
  UNLOCKED: 'unlocked',
};

export const IMAGES = {
  LOCKED: require('../../assets/images/lockGreen.png'),
  UNLOCKED: require('../../assets/images/lockRed.png'),
};

export const displayDateFormat = (strDate, timezone = undefined) => {
  return moment(strDate).format('MMM DD HH:mm');
};
