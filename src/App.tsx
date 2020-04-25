import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button >hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >hello</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" >hello</Button>
      <Button >hello</Button>
      <Button >hello</Button>
    
    </div>
  );
}

export default App;
