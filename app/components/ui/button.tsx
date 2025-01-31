import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/lib/utils'

const buttonVariants = cva(
	'bg-black text-white flex items-center rounded-md gap-2 shrink-0 grow-0 hover:bg-primary-neutral active:bg-white active:text-black border-2 border-transparent active:border-2 active:border-black',
	{
		variants: {
			size: {
				sm: 'h-12 px-4',
				md: 'h-[56px] px-5 py-4',
			},
		},
		defaultVariants: {
			size: 'sm',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
