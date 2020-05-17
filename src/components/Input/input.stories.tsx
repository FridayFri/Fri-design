import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Input } from "./input";
const ControlledInput = () => {
  const [value, setValue] = useState();
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
const defaultInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      placeholder="placeholder"
      onChange={action("changed")}
    />
    <ControlledInput />
  </>
);

storiesOf("Input Component", module)
  .add("Input", defaultInput)
//   .add("MenuWithVertical", MenuWithVertical);
