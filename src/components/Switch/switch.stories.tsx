import React from 'react'
import { storiesOf } from '@storybook/react'
import Switch from './swtich'

storiesOf('Switch', module)
  .add('default', () => <Switch  checked={false}/>)
//   .add('有文字', () => <Switch on='上架' off='下架' />)