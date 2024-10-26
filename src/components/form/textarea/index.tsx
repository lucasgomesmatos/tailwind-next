import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-700 shadow-sm"
    />
  )
}
