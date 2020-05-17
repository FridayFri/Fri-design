import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const defaultMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>111</MenuItem>
    <MenuItem>222</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>dropdown1</MenuItem>
      <MenuItem>dropdown2</MenuItem>
    </SubMenu>
    <MenuItem>333</MenuItem>
  </Menu>
);

const MenuWithVertical = () => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
    mode="vertical"
    defaultOpenSubMenus={["2"]}
  >
    <MenuItem>111</MenuItem>
    <MenuItem>222</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>dropdown1</MenuItem>
      <MenuItem>dropdown2</MenuItem>
    </SubMenu>
    <MenuItem>333</MenuItem>
  </Menu>
);

storiesOf("Menu Component", module)
  .add("Menu", defaultMenu)
  .add("MenuWithVertical", MenuWithVertical);
