import React from "react";
import { Flex, Text } from "@aws-amplify/ui-react";

function Footer() {
  return (
    <Flex justifyContent="center" margin={`2rem 0 0 0`}>
      <Text>&copy; All Rights Reserved</Text>
    </Flex>
  );
}

export default Footer;
