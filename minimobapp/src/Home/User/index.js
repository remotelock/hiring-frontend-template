import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import ListItem from './ListItem';

const UserList = ({data}) => {
  const [userList, setUserList] = useState(data);

  return (
    <View>
      <FlatList
        data={userList}
        renderItem={({item, index}) => {
          return (
            <ListItem
              data={item}
              index={index}
              onPress={value => {
                toggleItemSwitch(value);
              }}
            />
          );
        }}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default UserList;
