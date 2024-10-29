import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from './button'

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="http://github.com/lucasgomesmatos.png"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
        alt=""
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Lucas Gomes</span>
        <span
          className="truncate text-sm text-zinc-500"
          title="lucasgomesmatosdev@gmail.com"
        >
          lucasgomesmatosdev@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
