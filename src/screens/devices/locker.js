import React from 'react'
import {View, Switch, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Locker({id, state, onToggle}) {
  const text = state.charAt(0).toUpperCase() + state.substring(1)
  const isLocked = state === 'locked'
  return (
    <View style={styles.container}>
      <Switch value={isLocked} onChange={() => onToggle({id, state})} />
      <View style={styles.lock}>
        <Icon
          name={isLocked ? 'lock' : 'lock-open'}
          size={20}
          color={isLocked ? 'darkcyan' : 'gray'}
        />
        <Text> {text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default React.memo(Locker)
