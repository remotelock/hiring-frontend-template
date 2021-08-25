/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Switch} from 'react-native';
import TestRenderer from 'react-test-renderer';
import {fireEvent} from '@testing-library/react-native';
import UserItem from '../src/components/UserItem';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  TestRenderer.create(
    <UserItem
      user={{
        attributes: {
          device_time_zone: 'America/Denver',
          email: 'example@email.com',
          ends_at: '2019-07-29T20:58:22',
          name: 'Ines Walter',
          phone: null,
          pin: '8248',
          starts_at: '2019-07-22T20:58:22',
          status: 'current',
        },
        id: '1',
        type: 'lock',
      }}
    />,
  );
});
