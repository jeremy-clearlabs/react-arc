// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { DashboardPage } from 'components'

storiesOf('Pages/DashboardPage', module)
  .add('default', () => (
    <DashboardPage />
  ))
