import React from "react";
import { Image, Flex, Heading } from "@aws-amplify/ui-react";

import ArtisanChains from "../../assets/images/Artisan_Chains.svg";

function AWSHeader() {
  return (
    <Flex margin={`10rem 0 2rem 0`} justifyContent="center" alignItems="center">
      <Image alt="logo" src={ArtisanChains} width="6rem" />
    </Flex>
  );
}

export default AWSHeader;
