/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="281px"
      height="45px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="281px"
        height="45px"
        pathData="M0 22.5C0 10.0736 10.0736 0 22.5 0L258.5 0C270.926 0 281 10.0736 281 22.5L281 22.5L281 22.5C281 34.9264 270.926 45 258.5 45L22.5 45C10.0736 45 0 34.9264 0 22.5L0 22.5Z"
        viewBox={{ minX: 0, minY: 0, width: 281, height: 45 }}
        color="rgba(255,255,255,1)"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
      <View
        position="absolute"
        top="24.444444444444443%"
        bottom="22.22222222222222%"
        left="5.6939501779359425%"
        right="85.76512455516014%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Icon
          width="15px"
          height="15px"
          pathData="M14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5L7.5 15.5C11.9183 15.5 15.5 11.9183 15.5 7.5L14.5 7.5ZM7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5L-0.5 7.5C-0.5 11.9183 3.08172 15.5 7.5 15.5L7.5 14.5ZM0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5L7.5 -0.5C3.08172 -0.5 -0.5 3.08172 -0.5 7.5L0.5 7.5ZM7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5L15.5 7.5C15.5 3.08172 11.9183 -0.5 7.5 -0.5L7.5 0.5Z"
          viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
          color="rgba(0,0,0,1)"
          position="absolute"
          top="12.5%"
          bottom="25%"
          left="12.5%"
          right="25%"
          {...getOverrideProps(overrides, "View.View[0].Icon[0]")}
        ></Icon>
        <Icon
          width="5.197265625px"
          height="5.197509765625px"
          pathData="M5.55105 4.84395L0.353553 -0.353553L-0.353553 0.353553L4.84395 5.55105L5.55105 4.84395Z"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 5.197265625,
            height: 5.197509765625,
          }}
          color="rgba(0,0,0,1)"
          position="absolute"
          top="65.84374904632568%"
          bottom="12.5%"
          left="65.84374904632568%"
          right="12.5%"
          {...getOverrideProps(overrides, "View.View[0].Icon[1]")}
        ></Icon>
      </View>
      <Text
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight="300"
        color="rgba(30.00000011175871,30.00000011175871,30.00000011175871,1)"
        lineHeight="18.75px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-end"
        letterSpacing="-0.85px"
        position="absolute"
        top="28.888888888888886%"
        bottom="26.666666666666668%"
        left="20.640569395017792%"
        right="44.48398576512456%"
        padding="0px 0px 0px 0px"
        children="Shop Artisan..."
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
