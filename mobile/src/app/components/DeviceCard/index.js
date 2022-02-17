
import React from 'react'
import { Image, Text, View } from "react-native";
import { Icon, Switch } from 'react-native-elements';
import { Colors } from '@common';
import styles from './styles';

const DeviceState = ({ lockState = "", isLocked = false, appTheme }) => (<View style={styles().view_device_lock_state}>
    <Switch color={isLocked ? Colors.WhatsAppGreen : Colors.Red} value={lockState === 'locked'} style={styles({ appTheme }).switch_lock_state} />
    <View style={styles().view_lock_state}>
        <Icon type='material-community' name={isLocked ? 'lock' : 'lock-open'} color={isLocked ? Colors.WhatsAppGreen : Colors.Red} style={styles({ appTheme, isLocked }).icon_lock} />
        <Text style={styles({ appTheme, isLocked }).txt_lock_state}>{lockState?.toUpperCase()}</Text>
    </View>
</View>)


const DeviceInfo = ({ name,state, model_number, appTheme }) => (<View style={styles().view_device_info}>
    <Text style={styles({ appTheme }).txt_name}>{name}</Text>
    <Text style={styles({ appTheme }).txt_model}>{model_number}</Text>
    <DeviceState lockState={state} isLocked={state === 'locked'} appTheme={appTheme} />
</View>)

const DeviceCard = ({ device: { attributes }, appTheme }) => (<View style={styles({ appTheme }).view_container}>
    <Image style={styles().img_avatar} source={{ uri: "https://placekitten.com/g/100/100", height: 100, width: 100 }} resizeMethod={'auto'} resizeMode={'contain'} />
    <DeviceInfo {...attributes} appTheme={appTheme} />
</View>)


export default DeviceCard

