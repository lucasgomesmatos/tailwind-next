'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './tab-item'

export const SettingsTabs = () => {
  const [currentValue, setCurrentValue] = useState('tab1')

  return (
    <Tabs.Root defaultValue="tab1" onValueChange={setCurrentValue}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="My details"
          value="tab1"
          isSelect={currentValue === 'tab1'}
        />
        <TabItem
          title="Profile"
          value="tab2"
          isSelect={currentValue === 'tab2'}
        />
        <TabItem
          title="Password"
          value="tab3"
          isSelect={currentValue === 'tab3'}
        />
        <TabItem title="Team" value="tab4" isSelect={currentValue === 'tab4'} />
        <TabItem title="Plan" value="tab5" isSelect={currentValue === 'tab5'} />
        <TabItem
          title="Billing"
          value="tab6"
          isSelect={currentValue === 'tab6'}
        />
        <TabItem
          title="Email"
          value="tab7"
          isSelect={currentValue === 'tab7'}
        />
        <TabItem
          title="Notifications"
          value="tab8"
          isSelect={currentValue === 'tab8'}
        />
        <TabItem
          title="Integrations"
          value="tab9"
          isSelect={currentValue === 'tab9'}
        />
        <TabItem
          title="API"
          value="tab10"
          isSelect={currentValue === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
