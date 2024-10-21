'use client'

import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

export const Prefix = (props: PrefixProps) => {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  return (
    <input
      {...props}
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
    />
  )
}

export type RootProps = ComponentProps<'div'>

export const Root = (props: RootProps) => {
  return (
    <div
      {...props}
      className="group mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm transition-colors duration-200 ease-in-out focus-within:border-zinc-400 group-hover:border-zinc-500"
    />
  )
}

export const Input = {
  Prefix,
  Control,
  Root,
}
