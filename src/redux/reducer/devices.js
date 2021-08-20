import {
  GET_DEVICES,
  TOGGLE_LOCK,
  REQUEST,
  FAILURE,
  SUCCESS,
} from "../constants";

const initialDevicesState = {
  loading: false,
  error: null,
  loaded: false,
  accessForm: false,
  entities: [],
};

const users = (devicesState = initialDevicesState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DEVICES + REQUEST: {
      return {
        ...devicesState,
        loading: true,
        loaded: false,
        error: null,
      };
    }

    case GET_DEVICES + FAILURE: {
      return {
        ...devicesState,
        loading: false,
        loaded: false,
        error: payload.error,
      };
    }
    case GET_DEVICES + SUCCESS: {
      return {
        ...devicesState,
        loading: false,
        loaded: true,
        error: null,
        entities: [...payload.data],
      };
    }

    case TOGGLE_LOCK: {
      const deviceToggeled = {
        ...devicesState.entities.filter(
          (device) => device.id === payload.id
        )[0],
      };

      const newToggleState =
        deviceToggeled.attributes.state === "unlocked" ? "locked" : "unlocked";

      const changedDeviceToggeled = {
        ...deviceToggeled,
        attributes: {
          ...deviceToggeled.attributes,
          state: newToggleState,
        },
      };

      const otherDevices = devicesState.entities.filter(
        (device) => device.id !== payload.id
      );

      return {
        ...devicesState,
        entities: [...otherDevices, changedDeviceToggeled],
      };
    }

    default:
      return devicesState;
  }
};

export default users;
