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
import { NavItem } from '../nav-item'
import { UsedSpaceWidget } from '../used-space-widget'
import { Logo } from './logo'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="group relative mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-colors duration-200 ease-in-out focus-within:border-zinc-400 group-hover:border-zinc-500">
        <Search className="absolute left-2.5 top-2.5 size-5 text-zinc-500" />
        <input
          type="search"
          className="flex-1 border-0 bg-transparent p-0 pl-8 text-zinc-900 placeholder-zinc-600 outline-none"
          placeholder="Pesquisar..."
        />
      </div>
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
      </div>
    </aside>
  )
}
