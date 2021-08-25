import React from 'react'
import {Text, StyleSheet} from 'react-native'

function Empty({message}) {
  return <Text style={styles.message}>{message || 'List is empty'}</Text>
}

const styles = StyleSheet.create({
  message: {
    marginTop: 25,
    textAlign: 'center',
  },
})

export default Empty
