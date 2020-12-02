import { Typography } from "@material-ui/core";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import lavenderJpg from "../../../static/img/header.jpg";

const SignUpFlow = () => {
  return (
    <div>
      <Typography variant="h1" id="announce">
        Welcome to the Practitioner Panel
      </Typography>
      <img src={lavenderJpg} alt="lavender"></img>
      <SignUp />
      <br></br>
      <SignIn />
    </div>
  );
};

export default SignUpFlow;
