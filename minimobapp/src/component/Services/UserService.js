import {get} from '../Common/API';
import {API_USERS} from '../Common/Constant';

//get list of devices
export const getUserList = async () => {
  return get(API_USERS);
};
