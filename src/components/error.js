import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Error({message}) {
  return (
    <>
      <Text style={styles.title}>Error</Text>
      <Text style={styles.message}>{message}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  message: {
    marginTop: 10,
    textAlign: 'center',
  },
})

export default Error
