import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function ListItem({title, subtitle, children}) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 150,
    padding: 15,
    marginBottom: 10,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginRight: 15,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'darkgray',
  },
  bodyContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
})

export default ListItem
