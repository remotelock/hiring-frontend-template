import React from 'react';
import {ControllerType, DispatchType} from './src/types';

export type GlobalContextType = {
  state?: ControllerType;
  dispatch?: ({type, data}: DispatchType) => void;
};

const AppContext = React.createContext<GlobalContextType>({});

export default AppContext;
