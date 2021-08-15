import {get} from '../Common/API';
import {API_DEVICES} from '../Common/Constant';

// get list of devices
export const getDeviceList = async () => {
  return get(API_DEVICES);
};
