/**
 * @author Gagana Lakruwan
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import ComponentsStyles from '../Constant/Components.styles';

type CustomPropTypes = {
  placeholder?: string;
  editable?: boolean;
  is_name?: boolean;
  name?: string;
  is_ex?: boolean;
  ex?: string;
  style?: any;
  bdrStyle?: any;
  textstyle?: any;
  secureTextEntry?: boolean;
  placeholderColor?: string;
  setState?: Function;
  stateValue?: any;
  keyType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  multiline?: boolean;
  numberOfLines?: number;
  max?: number;
  onBlur?: Function;
  onFocus?: Function;
  title?: String;
};
const InputText = ({
  title,
  bdrStyle,
  placeholder,
  editable,
  style,
  secureTextEntry,
  placeholderColor,
  setState,
  stateValue,
  keyType,
  multiline,
  numberOfLines,
  max,
  onBlur,
  onFocus,
}: CustomPropTypes) => {
  var customBackground = {backgroundColor: 'transparent'};
  if (editable != undefined && editable == false)
    customBackground = {backgroundColor: 'red'};
  else {
    customBackground = {backgroundColor: 'transparent'};
  }
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={[styles.borderStyle, bdrStyle]}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TextInput
          style={[styles.inputTextStyle, customBackground, style]}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={(text: any) => {
            if (setState) setState(text);
          }}
          value={stateValue}
          keyboardType={keyType}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={max}
          onBlur={() => {
            if (onBlur) onBlur();
          }}
          onFocus={() => {
            if (onFocus) onFocus();
          }}></TextInput>
      </View>
    </View>
  );
};
export default InputText;
const styles = StyleSheet.create({
  inputTextStyle: {
    color: ComponentsStyles.COLORS.ICON_BLUE,
    fontSize: 15,
    height: 45,
    borderColor: ComponentsStyles.COLORS.Accent_900,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 6,
    padding: 0,
  },
  borderStyle: {
    paddingTop: 7,
    paddingBottom: 7,
    flex: 2,
    height: 60,
  },
  titleStyle: {
    color: ComponentsStyles.COLORS.ICON_BLUE,
    marginBottom: 8,
    opacity: 0.8,
    fontWeight: '600',
  },
});
