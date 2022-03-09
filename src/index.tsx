import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface CurrencyProps {
  /** 货币单位 */
  name?: string;
  /** 价钱 */
  value: number | string;
  /** 间距 */
  interval?: number;
  /** 精度 */
  precision?: number;
  /**  整体的样式 */
  style?: StyleProp<ViewStyle>;
  /** 货币单位样式 */
  nameStyle?: StyleProp<TextStyle>;
  /** 价钱样式 */
  valueStyle?: StyleProp<TextStyle>;
}

const Currency: React.FC<CurrencyProps> = (props) => {
  let value = props?.value ?? 0;
  let _value =
    typeof value == "number"
      ? parseFloat(`${value}`).toFixed(props?.precision ?? 2)
      : value;
  return (
    <View style={[styles.view, props?.style ?? {}]}>
      <Text style={[styles.nameStyle, props?.nameStyle]}>
        {props?.name || "¥"}
      </Text>
      <View style={{ width: props?.interval ?? 0 }} />
      <Text style={[styles.valueStyle, props?.valueStyle ?? {}]}>{_value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "baseline",
    display: "flex",
  },
  nameStyle: {
    fontSize: 14,
    color: "#ff5252",
  },
  valueStyle: {
    fontSize: 18,
    color: "#ff5252",
  },
});
export default Currency;
