/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SecondaryBtnDarkHovered(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="102px"
      height="38px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="102px"
        height="38px"
        pathData="M0 19C0 8.50659 8.50659 0 19 0L83 0C93.4934 0 102 8.50659 102 19L102 19C102 29.4934 93.4934 38 83 38L19 38C8.50659 38 0 29.4934 0 19L0 19Z"
        viewBox={{ minX: 0, minY: 0, width: 102, height: 38 }}
        color="rgba(30.00000011175871,30.00000011175871,30.00000011175871,1)"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <Text
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        children="Hover"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
