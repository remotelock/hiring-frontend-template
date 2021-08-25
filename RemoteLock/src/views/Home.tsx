import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import colours from '../assets/colours';
import TabBar from '../components/TabBar';
import Devices from './Devices';
import Users from './Users';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <View style={styles.container}>
      <TabBar
        items={[
          {
            icon: 'Devices',
            label: 'Devices',
          },
          {
            icon: 'User',
            label: 'Users',
          },
        ]}
        onTabChange={setTabIndex}
        activeTabIndex={tabIndex}
      />
      <View style={styles.content}>
        {tabIndex === 0 ? <Devices /> : <Users />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.bg,
    flex: 1,
  },
  content: {
    padding: 20,
    flex: 1,
  },
});

export default Home;
