import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import comStyles from '../Constant/Components.styles';
import IconA from 'react-native-vector-icons/Octicons';

// parameter types
type ParamTypes = {
  title: string;
  style?: any;
  disabled?: boolean;
  textStyle?: any;
  onPress?: Function;
  icon_name?: string;
  is_icon?: boolean;
  iconColor?: string;
};

const ActionButton = ({
  style,
  disabled,
  textStyle,
  title,
  onPress,
  icon_name,
  is_icon,
  iconColor,
}: ParamTypes) => {
  return (
    <View style={[styles.CONTAINER, style]}>
      <TouchableOpacity
        onPress={() => {
          if (onPress) onPress();
        }}
        disabled={disabled}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {is_icon ? (
            <View style={{marginRight: 10}}>
              <IconA name={icon_name} size={20} color={iconColor} />
            </View>
          ) : (
            <></>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[styles.BUTTON_TEXT, textStyle]}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  CONTAINER: {
    width: '100%',
    backgroundColor: comStyles.COLORS.ICON_BLUE,
    padding: 10,
    borderRadius: 10,
  },
  BUTTON_TEXT: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ActionButton;
