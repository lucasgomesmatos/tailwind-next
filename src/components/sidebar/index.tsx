'use client'

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import * as Input from '../form/input'
import { NavItem } from '../nav-item'
import { Profile } from '../profile'
import { UsedSpaceWidget } from '../used-space-widget'
import { Logo } from './logo'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../button'

export const Sidebar = () => {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="size-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control type="search" placeholder="Pesquisar..." />
        </Input.Root>
        <nav className="space-y-0.5">
          <ul>
            <li>
              <NavItem title="Home" icon={Home} />
            </li>
            <li>
              <NavItem title="Dashboard" icon={BarChart} />
            </li>
            <li>
              <NavItem title="Projects" icon={SquareStack} />
            </li>
            <li>
              <NavItem title="Tasks" icon={CheckSquare} />
            </li>
            <li>
              <NavItem title="Reporting" icon={Flag} />
            </li>
            <li>
              <NavItem title="Users" icon={Users} />
            </li>
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>
          <UsedSpaceWidget />
          <div className="h-px bg-zinc-200" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
