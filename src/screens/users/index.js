import React, {useCallback, useEffect} from 'react'
import {View, Text, FlatList, RefreshControl, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import ListItem from '../../components/listItem'
import Error from '../../components/error'
import Empty from '../../components/empty'
import Info from './info'

import {actions} from '../../redux/users'

function Users() {
  const dispatch = useDispatch()
  const {data, request, error} = useSelector(state => state.users)

  const onRefresh = useCallback(() => dispatch(actions.get()))

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
            subtitle={item.attributes.email || 'no email'}>
            <Info
              type={item.type}
              start={item.attributes.starts_at}
              end={item.attributes.ends_at}
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
        ListEmptyComponent={<Empty message="No users yet" />}
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

export default Users
