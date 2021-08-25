import React, {useCallback, useEffect} from 'react'
import {View, FlatList, RefreshControl, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import ListItem from '../../components/listItem'
import Error from '../../components/error'
import Empty from '../../components/empty'
import Locker from './locker'

import {actions} from '../../redux/devices'

function Devices() {
  const dispatch = useDispatch()
  const {data, request, error} = useSelector(state => state.devices)

  const onRefresh = useCallback(() => dispatch(actions.get()))

  const onToggle = useCallback(({id, state}) => {
    dispatch(
      actions.toggleLock({
        id,
        state: state === 'locked' ? 'unlocked' : 'locked',
      }),
    )
  })

  useEffect(() => {
    dispatch(actions.get())
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ListItem
            key={item.id}
            title={item.attributes.name}
            subtitle={item.attributes.model_number}>
            <Locker
              id={item.id}
              onToggle={onToggle}
              state={item.attributes.state}
            />
          </ListItem>
        )}
        refreshControl={
          <RefreshControl
            refreshing={request === 'pending'}
            onRefresh={onRefresh}
          />
        }
        ListHeaderComponent={error && <Error message={error} />}
        ListEmptyComponent={<Empty message="No devices yet" />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
})

export default Devices
