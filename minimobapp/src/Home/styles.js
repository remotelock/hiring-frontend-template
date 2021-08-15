import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  tabsContainerStyle: {
    //custom styles
  },
  tabStyle: {
    //custom styles
    backgroundColor: '#dfdfe0',
    borderColor: '#dfdfe0',
    borderWidth: 3,
  },
  firstTabStyle: {
    //custom styles
  },
  lastTabStyle: {
    //custom styles
  },
  tabTextStyle: {
    //custom styles
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 1.5,
  },
  activeTabStyle: {
    //custom styles
    backgroundColor: '#ffffff',
    // borderRadius : 10
  },
  activeTabTextStyle: {
    //custom styles
    color: '#000000',
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  },
});

export default styles;
