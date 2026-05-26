import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
}

/**
 * TODO: Variants (primary/ghost), sizes, loading state (PROJECT_OUTLINE.md).
 */
export function Button({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button type={type} className="ui-button" {...rest}>
      {children}
    </button>
  )
}
