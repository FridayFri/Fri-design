import React from "react";
import { storiesOf } from "@storybook/react";

import Loading from "./index";

const defaultLoading = () => {
    const text = '正在加载中...'
    return(
    <Loading size={100} text={text} />
)};

storiesOf("Loading Component", module)
  .add("Loading", defaultLoading)
