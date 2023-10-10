'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { TabsItem } from './TabsItem';
import { useState } from 'react';

export function HorizontalTabs() {
  const [currentTab, SetCurrentTab] = useState('tab1');

  return (
    <Tabs.Root value={currentTab} onValueChange={SetCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabsItem value="tab1" title="My Details" isSelected={currentTab === 'tab1'} />
        <TabsItem value="tab2" title="Profile" isSelected={currentTab === 'tab2'} />
        <TabsItem value="tab3" title="Password" isSelected={currentTab === 'tab3'} />
        <TabsItem value="tab4" title="Team" isSelected={currentTab === 'tab4'} />
        <TabsItem value="tab5" title="Plan" isSelected={currentTab === 'tab5'} />
        <TabsItem value="tab6" title="Billing" isSelected={currentTab === 'tab6'} />
        <TabsItem value="tab7" title="Email" isSelected={currentTab === 'tab7'} />
        <TabsItem value="tab8" title="Notifications" isSelected={currentTab === 'tab8'} />
        <TabsItem value="tab9" title="Intagrations" isSelected={currentTab === 'tab9'} />
        <TabsItem value="tab10" title="API" isSelected={currentTab === 'tab10'} />
      </Tabs.List>
    </Tabs.Root>
  );
}
