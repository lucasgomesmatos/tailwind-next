import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemsProps {
  title: string
  icon: ElementType
}

export const NavItems = ({ title, icon: Icon }: NavItemsProps) => {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="size-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 transition-all group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto size-5 text-zinc-400 transition-all group-hover:text-violet-300" />
    </a>
  )
}
