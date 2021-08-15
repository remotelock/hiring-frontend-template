import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Constant} from '../../component/Common';
import ListItemCard from '../ListItemCard';
const ListItem = ({data, index, onPress}) => {
  return (
    <ListItemCard image={<View style={styles.picView} />}>
      <View style={{marginBottom: 10}}>
        <Text style={styles.titleText}>{data.attributes.name}</Text>
        {data.attributes.email && (
          <Text style={styles.modalNumber}>{data.attributes.email}</Text>
        )}
        {data.attributes?.starts_at && (
          <Text style={styles.modalNumber}>
            {Constant.displayDateFormat(data.attributes.starts_at)} -{' '}
            {Constant.displayDateFormat(data.attributes.ends_at)}
          </Text>
        )}
      </View>
      <View style={styles.switchView}>
        <View></View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.itemStatusContainer,
              {
                backgroundColor:
                  Constant.COLORS.USER_STATUS[data.attributes.status] + '77',
              },
            ]}>
            <Text
              style={[
                styles.itemStatusText,
                {color: Constant.COLORS.USER_STATUS[data.attributes.status]},
              ]}>
              {data.attributes.status}
            </Text>
          </View>
        </View>
      </View>
    </ListItemCard>
  );
};

const styles = StyleSheet.create({
  picView: {
    height: 80,
    width: 80,
    borderRadius: 80,
    borderColor: '#dadada',
    borderWidth: 1,
    backgroundColor: '#efefef',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
  },
  modalNumber: {
    color: Constant.COLORS.GRAY,
    fontWeight: '500',
    fontSize: 17,
  },
  switchView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 10,
    // height: 32,
  },
  itemStatusContainer: {
    padding: 2,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  itemStatusText: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default ListItem;
