import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary: ['bg-violet-600 text-white hover:bg-violet-700'],
      outline: [' text-zinc-700 border border-zinc-300 hover:bg-zinc-50'],
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={button({
        variant: props.variant,
      })}
    />
  )
}