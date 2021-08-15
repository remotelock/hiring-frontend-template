import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListItemCard = ({image, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>{image}</View>
      <View style={styles.rightView}>{children}</View>
    </View>
  );
};

// Written here cause very small list of style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
  },
  leftView: {
    flex: 0.35,
  },

  rightView: {
    flex: 0.65,
    justifyContent: 'space-between',
  },
});

export default ListItemCard;
