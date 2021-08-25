import React, {useContext} from 'react';
import DeviceItem from '../components/DeviceItem';
import FadeInView from '../components/FadeInView';
import AppContext, {GlobalContextType} from '../../AppContext';
import {Device} from '../types';

const Devices = () => {
  const {state, dispatch} = useContext<GlobalContextType>(AppContext);

  const updateItem = (data: Device) => {
    dispatch?.({
      type: 'UPDATE_DEVICE',
      data: {
        device: data,
      },
    });
  };

  return (
    <FadeInView>
      {state?.devices?.map((device, i) => (
        <DeviceItem
          key={`${device.id}-${i}`}
          device={device}
          onToggleChange={updateItem}
        />
      ))}
    </FadeInView>
  );
};

export default Devices;
