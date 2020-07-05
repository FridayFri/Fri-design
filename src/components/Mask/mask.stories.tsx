import React, { Component } from "react";
import { storiesOf } from "@storybook/react";

import Mask from "./mask";

const defaultMask = () => {
    return(
    <Mask>11111 </Mask>
)};

storiesOf("Mask Component", module)
  .add("Mask", defaultMask)
