'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './tab-item'

export const SettingsTabs = () => {
  const [currentValue, setCurrentValue] = useState('tab1')

  return (
    <Tabs.Root value={currentValue} onValueChange={setCurrentValue}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              value="tab1"
              title="My details"
              isSelect={currentValue === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelect={currentValue === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelect={currentValue === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelect={currentValue === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelect={currentValue === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelect={currentValue === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelect={currentValue === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelect={currentValue === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelect={currentValue === 'tab9'}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelect={currentValue === 'tab10'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="round-lg relative flex-1 bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
