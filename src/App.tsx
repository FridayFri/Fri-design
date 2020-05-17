import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
library.add(fas);
function App() {
  return (
    <div className="App">
      <Icon icon='arrow-down' theme="primary" size="10x"/>
      <Menu
        defaultIndex="0"
        onSelect={(index) => {
          console.log(index);
        }}
        // mode="vertical"
        // defaultOpenSubMenus={["2"]}
      >
        <MenuItem>111</MenuItem>
        <MenuItem>222</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>333</MenuItem>
      </Menu>
      <Button>hello</Button>
      <Button btnType='primary' size='lg'>
        hello
      </Button>
      <Button btnType='link' href="https://www.baidu.com">
        Link
      </Button>
      <Button btnType='danger' size='lg'>
        Danger Large
      </Button>
      <Button btnType='default' size='sm'>
        Small Default
      </Button>
    </div>
  );
}

export default App;
