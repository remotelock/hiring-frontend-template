import React from 'react';
import {StyleProp, ViewStyle, StyleSheet, View} from 'react-native';
import {IconTypes} from '../types';
import {TabItem} from './TabBarItem';

type TabBarProps = {
  style?: StyleProp<ViewStyle>;
  items: {icon: IconTypes; label: string}[];
  onTabChange: (i: number) => void;
  activeTabIndex: number;
};

const TabBar: React.FC<TabBarProps> = ({
  style,
  items,
  activeTabIndex,
  onTabChange,
}) => {
  return (
    <View style={[styles.bar, style]}>
      {items.map((it, index) => (
        <TabItem
          key={index}
          style={styles.item}
          icon={it.icon}
          label={it.label}
          active={index === activeTabIndex}
          onPress={() => onTabChange(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 60,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  item: {
    flex: 1,
  },
});

export default TabBar;
