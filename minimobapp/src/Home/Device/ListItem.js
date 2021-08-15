import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import {Constant} from '../../component/Common';
import ListItemCard from '../ListItemCard';
const ListItem = ({data, index, onPress}) => {
  return (
    <ListItemCard image={<View style={styles.picView} />}>
      <View style={{marginBottom: 10}}>
        <Text style={styles.titleText}>{data.attributes.name}</Text>
        <Text style={styles.modalNumber}>{data.attributes.model_number}</Text>
      </View>
      <View style={styles.switchView}>
        <View>
          <SwitchToggle
            switchOn={data.attributes.state === 'locked' ? true : false}
            onPress={() => onPress(data)}
            circleColorOff={Constant.COLORS.WHITE}
            circleColorOn={Constant.COLORS.WHITE}
            backgroundColorOn={Constant.COLORS.GREEN}
            backgroundColorOff={Constant.COLORS.RED}
            containerStyle={styles.switchContianer}
            circleStyle={styles.switchCircle}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={
              data.attributes.state === Constant.DEVICE_STATUS.LOCKED
                ? Constant.IMAGES.LOCKED
                : Constant.IMAGES.UNLOCKED
            }
          />
          <Text
            style={[
              styles.itemLockText,
              {
                color:
                  data.attributes.state === 'locked'
                    ? Constant.COLORS.GREEN
                    : Constant.COLORS.RED,
              },
            ]}>
            {data.attributes.state}
          </Text>
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
    height: 32,
  },
  image: {
    width: 20,
    height: 25,
  },
  itemLockText: {
    marginStart: 10,
    fontSize: 20,
  },
  switchContianer: {
    marginTop: 16,
    width: 50,
    height: 30,
    borderRadius: 25,
    padding: 3,
  },
  switchCircle: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
});

export default ListItem;
