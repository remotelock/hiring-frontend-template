import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import colours from '../assets/colours';

type CardProps = {
  children: ReactNode;
};

const Card = ({children}: CardProps) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Card;
