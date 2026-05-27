import type { ReactNode } from 'react'

export type CardProps = {
  title?: string
  children?: ReactNode
  bodyClassName?: string
}

/**
 * TODO: Optional footer slot, elevation, padding tokens (PROJECT_OUTLINE.md).
 */
export function Card({ title, children, bodyClassName }: CardProps) {
  return (
    <section className={`ui-card`}>
      {title ? <h2 className="ui-card__title">{title}</h2> : null}
      <div className={`ui-card__body ${bodyClassName}`}>{children}</div>
    </section>
  )
}
