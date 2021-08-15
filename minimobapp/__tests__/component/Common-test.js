/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Spinner, get, Constant } from "../../src/component/Common";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<Spinner />);
});



// test('throws an error if empty object for device', () => {
//   // fetch.mockImplementationOnce(JSON.stringify({}));
//   const onResponse = jest.fn();
//   const onError = jest.fn();

//   return get(Constant.API_DEVICES)
//     .then(onResponse)
//     .catch(onError)
//     .finally(() => {
//       expect(onResponse).not.toHaveBeenCalled();
//       expect(onError).toHaveBeenCalled();
//     });
// });

// test('throws an error if empty object for Users', () => {
//   // fetch.mockImplementationOnce(JSON.stringify({}));
//   const onResponse = jest.fn();
//   const onError = jest.fn();

//   return get(Constant.API_USERS)
//     .then(onResponse)
//     .catch(onError)
//     .finally(() => {
//       expect(onResponse).not.toHaveBeenCalled();
//       expect(onError).toHaveBeenCalled();
//     });
// });