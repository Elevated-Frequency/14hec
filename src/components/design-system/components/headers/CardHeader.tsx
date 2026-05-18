import type { CSSProperties, ReactNode } from 'react'
import Type from '../../atoms/Type'

export interface CardHeaderProps {
  /**
   * CSS `background` gradient for the card. Each consumer computes
   * this from its domain data (journal amber, collection color theme,
   * planet tint).
   */
  gradient?: string
  /** CSS `border` value. Falls back to the surface class default. */
  border?: string
  /**
   * Card surface class. Controls radius, padding, and base visual
   * treatment. Default `'rounded-2xl'`.
   *
   * Common values: `'card'` (JournalView), `'card-glow-celestial'`
   * (PlanetaryTimingDetail), `'rounded-2xl'` (CollectionsView).
   */
  surface?: string
  /**
   * Large decorative icon or symbol rendered to the left of the title
   * at reduced opacity. Wrapped in an `aria-hidden` container.
   */
  icon?: ReactNode
  /** The card title. */
  title: string
  /** Semantic heading level. Default `'h2'`. */
  as?: 'h1' | 'h2' | 'h3'
  /** Tailwind classes on the title element. */
  titleClassName?: string
  /**
   * Content below the title row: metadata, description, inset cards.
   */
  children?: ReactNode
  /** Trailing action buttons rendered opposite the title. */
  actions?: ReactNode
  /** Render `divider-gradient` at the bottom. Default `false`. */
  divider?: boolean
  /** Additional classes on the outer container. */
  className?: string
}

/**
 * A header rendered inside a styled card with a gradient background.
 * Provides visual weight without the full hero treatment. Each
 * consumer picks its own card surface, gradient, and metadata layout.
 *
 * Used by: JournalView, CollectionsView, PlanetaryTimingDetail.
 *
 * @example
 * <CardHeader
 *   surface="card"
 *   gradient="linear-gradient(135deg, rgba(245,158,11,0.03) 0%, rgba(26,25,21,0.65) 100%)"
 *   title="Morning practice"
 *   divider
 * >
 *   <span className="text-xs text-earth-500">May 17, 2026</span>
 * </CardHeader>
 *
 * @example
 * <CardHeader
 *   surface="card-glow-celestial"
 *   gradient={planetGradient}
 *   icon={<span className="text-4xl">☉</span>}
 *   title="Sun-Aligned Plants"
 * >
 *   <p className="text-sm text-earth-400">
 *     Plants best harvested during Sun hours.
 *   </p>
 * </CardHeader>
 */
export default function CardHeader({
  gradient,
  border,
  surface = 'rounded-2xl',
  icon,
  title,
  as = 'h2',
  titleClassName,
  children,
  actions,
  divider = false,
  className,
}: CardHeaderProps) {
  const variant = as === 'h1' ? 'page-title' : 'heading'

  const style: CSSProperties = {}
  if (gradient) style.background = gradient
  if (border) style.border = border

  const classes = [surface, 'p-6 mb-6', className].filter(Boolean).join(' ')

  return (
    <div className={classes} style={Object.keys(style).length ? style : undefined}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {icon && (
            <span className="text-3xl opacity-50" aria-hidden="true">
              {icon}
            </span>
          )}
          <div>
            <Type variant={variant} as={as} className={titleClassName}>
              {title}
            </Type>
            {children}
          </div>
        </div>
        {actions && (
          <div className="flex items-center gap-2 shrink-0">{actions}</div>
        )}
      </div>
      {divider && <div className="divider-gradient mt-5" />}
    </div>
  )
}
