import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex="0"
        onSelect={(index) => {
          console.log(index);
        }}
        mode="vertical"
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
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        Link
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        Danger Large
      </Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Small}>
        Small Default
      </Button>
    </div>
  );
}

export default App;
