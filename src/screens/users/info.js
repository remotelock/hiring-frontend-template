import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {calculateDateAndStatus} from '../../utils'

function Info({type, start, end}) {
  const isUser = type === 'access_user'
  let info = {date: 'n/a', status: 'ACTIVE'}
  if (!isUser) {
    info = calculateDateAndStatus(start, end)
  }
  return (
    <>
      <Text style={styles.date}>{info.date}</Text>
      <View style={styles.statusContainer}>
        <Text
          style={[
            styles.status,
            info.status !== 'ACTIVE' ? styles.statusNotActive : {},
          ]}>
          {info.status}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  date: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'darkgray',
  },
  statusContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  status: {
    width: 100,
    borderRadius: 20,
    backgroundColor: '#C5F6A7',
    textAlign: 'center',
  },
  statusNotActive: {
    backgroundColor: '#F4F6A7',
  },
})

export default Info
