import React from "react";
import { Flex, Link, useAuthenticator } from "@aws-amplify/ui-react";

function AWSSignInFooter() {
  const { toResetPassword } = useAuthenticator();
  return (
    <Flex justifyContent="center">
      <Link onClick={toResetPassword} margin={`0 0 2rem 0`}>
        Reset your password
      </Link>
    </Flex>
  );
}

export default AWSSignInFooter;
