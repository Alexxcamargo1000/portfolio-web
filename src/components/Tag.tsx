import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const tagVariants = tv({
  base: 'rounded-full animate-fade font-medium',
  variants: {
    size: {
      xs: 'px-1 text-xs',
      sm: 'px-1 text-sm',
      md: 'px-2 text-base',
      lg: 'px-3 text-lg font-bold py-1  ',
    },
    variant: {
      primary: 'bg-cyan-800 text-neutral-100',
      secondary: 'bg-neutral-300 text-neutral-950 ',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'secondary',
  },
})
type TagVariantsProps = VariantProps<typeof tagVariants>

export interface TagProps extends ComponentProps<'span'>, TagVariantsProps {}

export function Tag({ size, variant, ...props }: TagProps) {
  return (
    <span {...props} className={tagVariants({ size, variant })}>
      {props.children}
    </span>
  )
}
