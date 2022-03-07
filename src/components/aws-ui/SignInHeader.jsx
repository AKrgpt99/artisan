import React from "react";
import { Heading } from "@aws-amplify/ui-react";

function AWSSignInHeader() {
  return (
    <Heading level={4} fontWeight="normal" margin={`2rem 0 0 2rem`}>
      Sign in to your Account
    </Heading>
  );
}

export default AWSSignInHeader;
