/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Switch} from 'react-native';
import TestRenderer from 'react-test-renderer';
import {fireEvent} from '@testing-library/react-native';
import DeviceItem from '../src/components/DeviceItem';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  TestRenderer.create(
    <DeviceItem
      device={{
        attributes: {
          connected_at: '2019-04-10T08:02:36Z',
          firmware_version: '5.01.181217.1',
          model_number: 'BG (LS-3i)',
          name: 'Home',
          power_source: 'alkaline_battery',
          programming_code: '2806',
          serial_number: 'AC000W001635336',
          state: 'locked',
        },
        id: '1',
        type: 'lock',
      }}
      onToggleChange={() => {}}
    />,
  );
});

it('updates device data when switch is toggled', () => {
  const mockFunction = jest.fn(data => data);
  const container = TestRenderer.create(
    <DeviceItem
      device={{
        attributes: {
          connected_at: '2019-04-10T08:02:36Z',
          firmware_version: '5.01.181217.1',
          model_number: 'BG (LS-3i)',
          name: 'Home',
          power_source: 'alkaline_battery',
          programming_code: '2806',
          serial_number: 'AC000W001635336',
          state: 'locked',
        },
        id: '1',
        type: 'lock',
      }}
      onToggleChange={mockFunction}
    />,
  );
  fireEvent(container.root.findByType(Switch), 'onValueChange');
  expect(mockFunction).toBeCalledWith({
    attributes: {
      connected_at: '2019-04-10T08:02:36Z',
      firmware_version: '5.01.181217.1',
      model_number: 'BG (LS-3i)',
      name: 'Home',
      power_source: 'alkaline_battery',
      programming_code: '2806',
      serial_number: 'AC000W001635336',
      state: 'unlocked',
    },
    id: '1',
    type: 'lock',
  });
});
