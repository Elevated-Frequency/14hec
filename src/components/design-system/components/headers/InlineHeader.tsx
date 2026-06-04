import type { ReactNode } from 'react'
import Type from '../../atoms/Type'

export interface InlineHeaderProps {
  /**
   * Large icon, symbol, or component rendered to the left of the title.
   * Planet glyphs, zodiac icons, emoji symbols. Wrapped in an
   * `aria-hidden` container.
   */
  icon?: ReactNode
  /** The page or section title. */
  title: string
  /**
   * Semantic heading level. Default `'h1'`. Detail panes inside a
   * list-detail layout should use `'h2'` since the list title is `h1`.
   */
  as?: 'h1' | 'h2' | 'h3'
  /** Additional Tailwind classes on the title element. */
  titleClassName?: string
  /**
   * Content rendered below the title — subtitle text, badges,
   * metadata rows. Sits inside the title column (to the right of the
   * icon when one is present).
   */
  children?: ReactNode
  /** Trailing action buttons or links, rendered opposite the title. */
  actions?: ReactNode
  /** Additional classes on the outer container. */
  className?: string
}

/**
 * Minimal header with no container, gradient, or decorative elements.
 * An optional icon, a title, and slots for subtitle/metadata and
 * trailing actions. The lightest-weight header — used where the page
 * content itself provides visual weight.
 *
 * Used by: PreparationDetail, PlanetaryTiming, PlanetsView detail,
 * SignsView detail, DoctrineDetail.
 *
 * @example
 * <InlineHeader icon={<span className="text-5xl">☉</span>} title="Sun" as="h2">
 *   <p className="text-sm text-earth-500">Leo</p>
 * </InlineHeader>
 *
 * @example
 * <InlineHeader title="Planetary Timing">
 *   <p className="text-xs text-earth-500">
 *     Optimal times for harvesting, preparing, and taking plant medicines
 *   </p>
 * </InlineHeader>
 */
export default function InlineHeader({
  icon,
  title,
  as = 'h1',
  titleClassName,
  children,
  actions,
  className,
}: InlineHeaderProps) {
  const variant = as === 'h1' ? 'page-title' : 'heading'
  const classes = ['flex items-start gap-4 mb-5', className]
    .filter(Boolean)
    .join(' ')

  const hasIcon = icon !== undefined

  return (
    <div className={classes}>
      {hasIcon && (
        <span aria-hidden="true">{icon}</span>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Type variant={variant} as={as} className={titleClassName}>
              {title}
            </Type>
            {children}
          </div>
          {actions && (
            <div className="flex items-center gap-2 shrink-0">{actions}</div>
          )}
        </div>
      </div>
    </div>
  )
}
