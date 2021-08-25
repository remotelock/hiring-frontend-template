import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import colours from '../assets/colours';
import {Device} from '../types';
import Card from './Card';

type DeviceItemProps = {
  device: Device;
  onToggleChange: (data: Device) => void;
};

const DeviceItem = ({device, onToggleChange}: DeviceItemProps) => (
  <Card>
    <View style={styles.row}>
      <View style={styles.circle} />
      <View style={styles.rightContent}>
        <Text style={styles.title}>{device.attributes.name}</Text>
        <Text style={styles.description}>{device.attributes.name}</Text>
        <View style={styles.bottomContent}>
          <Switch
            value={device.attributes.state === 'locked'}
            onValueChange={() =>
              onToggleChange({
                ...device,
                attributes: {
                  ...device.attributes,
                  state:
                    device.attributes.state === 'locked'
                      ? 'unlocked'
                      : 'locked',
                },
              })
            }
          />
          {device.attributes.state === 'locked' ? (
            <Text>Locked</Text>
          ) : (
            <Text>Unlocked</Text>
          )}
        </View>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    fontWeight: '200',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colours.bg,
    marginRight: 10,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rightContent: {
    flex: 1,
  },
});

export default DeviceItem;
