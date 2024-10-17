import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import * as Input from '../input'
import { NavItem } from '../nav-item'
import { Profile } from '../profile'
import { UsedSpaceWidget } from '../used-space-widget'
import { Logo } from './logo'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
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
    </aside>
  )
}
