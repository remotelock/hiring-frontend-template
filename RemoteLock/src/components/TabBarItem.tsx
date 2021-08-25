import React from 'react';
import {
  ViewStyle,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import Icons from '../assets/icons';
import {useSpring} from '../hooks/useSpring';
import {IconTypes} from '../types';

const activeColor = 'rgb(30, 30, 110)';
const inactiveColor = 'rgba(30, 30, 110, 0.4)';

type TabItemProps = {
  style?: StyleProp<ViewStyle>;
  icon: IconTypes;
  label: string;
  active: boolean;
  onPress: () => void;
};

export const TabItem: React.FC<TabItemProps> = ({
  style,
  icon,
  label,
  active,
  onPress,
}) => {
  const IconComponent = Icons[icon];
  const animation = useSpring({to: active ? 1 : 0}, {stiffness: 50});
  const labelTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });
  const iconTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });
  const labelVisibility = animation;
  const iconVisibility = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const dotScale = animation;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Animated.View
          style={[
            styles.centered,
            {
              opacity: labelVisibility,
              transform: [{translateY: labelTranslate}],
            },
          ]}>
          <Text style={styles.label}>{label}</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.centered,
            {opacity: iconVisibility, transform: [{translateY: iconTranslate}]},
          ]}>
          <IconComponent />
        </Animated.View>
        <Animated.View style={[styles.dot, {transform: [{scale: dotScale}]}]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered: {
    position: 'absolute',
  },
  icon: {
    tintColor: inactiveColor,
  },
  label: {
    color: activeColor,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  dot: {
    position: 'absolute',
    bottom: 8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: activeColor,
  },
});
