import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <Menu onSelect={(index)=>{console.log(index);
      }}>
        <MenuItem>111</MenuItem>
        <MenuItem>222</MenuItem>
        <MenuItem>333</MenuItem>
      </Menu>
      <Button >hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" >Link</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Danger Large</Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Small}>Small Default</Button>
    </div>
  );
}

export default App;
