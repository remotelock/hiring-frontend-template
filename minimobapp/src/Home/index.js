import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import {getDeviceList} from '../component/Services/DeviceService';
import {getUserList} from '../component/Services/UserService';

import DeviceList from './Device';
import UserList from './User';
import {Spinner} from '../component/Common';

const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userList, setUserList] = useState();
  const [deviceList, setDeviceList] = useState();

  const [isUserLoading, setIsUserLoading] = useState(false);
  const [isDeviceLoading, setIsDeviceLoading] = useState(false);

  useEffect(() => {
    loadDeviceList();
    loadUserList();
    return () => {}; // This would be good... safari crashing without this sometimes
  }, []);
  const handleIndexChange = index => {
    setSelectedIndex(index);
  };

  const loadDeviceList = async () => {
    setIsDeviceLoading(true);
    try {
      const list = await getDeviceList();
      setDeviceList(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeviceLoading(false);
    }
  };

  const loadUserList = async () => {
    setIsUserLoading(true);
    try {
      const list = await getUserList();
      setUserList(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SegmentedControlTab
        borderRadius={7}
        tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        firstTabStyle={styles.firstTabStyle}
        lastTabStyle={styles.lastTabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        selectedIndex={selectedIndex}
        allowFontScaling={true}
        values={['Devices', 'Users']}
        onTabPress={index => handleIndexChange(index)}
      />
      {selectedIndex === 0 &&
        (isUserLoading ? <Spinner /> : <DeviceList data={deviceList} />)}
      {selectedIndex === 1 &&
        (isDeviceLoading ? <Spinner /> : <UserList data={userList} />)}
    </View>
  );
};

export default HomeScreen;
