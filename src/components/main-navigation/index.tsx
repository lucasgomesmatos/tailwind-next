import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItems } from './nav-items'

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <ul>
        <li>
          <NavItems title="Home" icon={Home} />
        </li>
        <li>
          <NavItems title="Dashboard" icon={BarChart} />
        </li>
        <li>
          <NavItems title="Projects" icon={SquareStack} />
        </li>
        <li>
          <NavItems title="Tasks" icon={CheckSquare} />
        </li>
        <li>
          <NavItems title="Reporting" icon={Flag} />
        </li>
        <li>
          <NavItems title="Users" icon={Users} />
        </li>
      </ul>
    </nav>
  )
}
