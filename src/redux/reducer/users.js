import { GET_USERS, REQUEST, FAILURE, SUCCESS } from "../constants";

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: [],
};

const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS + REQUEST: {
      return {
        ...initialState,
      };
    }

    case GET_USERS + FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: payload.error,
      };
    }
    case GET_USERS + SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: [...payload.data],
      };
    }

    default:
      return state;
  }
};

export default users;
