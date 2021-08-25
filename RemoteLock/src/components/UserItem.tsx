import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colours from '../assets/colours';
import {User} from '../types';
import Card from './Card';
import moment from 'moment';

type UserItemProps = {
  user: User;
};

const UserItem = ({user}: UserItemProps) => (
  <Card>
    <View style={styles.row}>
      <View style={styles.circle} />
      <View style={styles.rightContent}>
        <Text style={styles.title}>{user.attributes.name}</Text>
        <Text style={styles.description}>{user.attributes.email}</Text>
        {user.attributes.starts_at && (
          <Text style={styles.description}>
            {moment(user.attributes.starts_at).format('MMM DD hh:mm')} -{' '}
            {moment(user.attributes.ends_at).format('MMM DD hh:mm')}
          </Text>
        )}
        <View style={[styles.statusContainer, styles[user.attributes.status]]}>
          <Text style={styles.status}>{user.attributes.status}</Text>
        </View>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    fontWeight: '200',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colours.bg,
    marginRight: 10,
  },
  rightContent: {
    flex: 1,
  },
  statusContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  current: {
    backgroundColor: colours.yellow,
  },
  active: {
    backgroundColor: colours.green,
  },
  upcoming: {
    backgroundColor: colours.red,
  },
  status: {
    textTransform: 'capitalize',
  },
});

export default UserItem;
