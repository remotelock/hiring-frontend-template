import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import ListItem from './ListItem';
import {Constant} from '../../component/Common';
const DeviceList = ({data}) => {
  const [deviceList, setDeviceList] = useState(data);

  const toggleItemSwitch = itemParam => {
    const newDeviceList = deviceList.map((item, index) => {
      if (itemParam.id === item.id) {
        if (item.attributes.state == Constant.DEVICE_STATUS.LOCKED) {
          item.attributes.state = Constant.DEVICE_STATUS.UNLOCKED;
        } else {
          item.attributes.state = Constant.DEVICE_STATUS.LOCKED;
        }
      }
      return item;
    });
    setDeviceList([...newDeviceList]);
  };
  return (
    <View>
      <FlatList
        data={deviceList}
        renderItem={({item, index}) => {
          return (
            <ListItem
              data={item}
              index={index}
              onPress={value => {
                toggleItemSwitch(value);
              }}
            />
          );
        }}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default DeviceList;
