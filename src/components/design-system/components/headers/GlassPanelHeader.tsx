import type { ReactNode } from 'react'
import Type from '../../atoms/Type'

export interface GlassPanelHeaderProps {
  /**
   * CSS `background` gradient applied to the glass-panel container.
   * Each sanctuary detail page computes this from its domain data
   * (season colors, HMBS domain tint).
   */
  gradient: string
  /** Large decorative emoji or symbol rendered at reduced opacity beside the title. */
  icon: ReactNode
  /** The heading text. Rendered via `Type.Heading`. */
  title: string
  /** Tailwind color class applied to the title (e.g. `'text-rose-300'`). */
  titleColor?: string
  /**
   * Metadata rendered alongside the title — badges, frequency text,
   * date ranges. Sits in a `<div>` below the title inside the icon row.
   */
  metadata?: ReactNode
  /** Description paragraph below the icon + title row. */
  description?: string
  /**
   * Additional content below the description — typically inset cards
   * for body areas, active signs, body focus, etc. Rendered as-is.
   */
  children?: ReactNode
  /** Additional classes merged onto the outer container. */
  className?: string
}

/**
 * Glassmorphism header for sanctuary detail pages. A translucent
 * `glass-panel` container with a large decorative icon, heading-level
 * title with domain-colored text, optional metadata, and slots for
 * inset detail cards.
 *
 * Used by: SeasonalDetail, HMBSDomainDetail.
 *
 * @example
 * <GlassPanelHeader
 *   gradient="linear-gradient(135deg, rgba(234,88,12,0.08) 0%, rgba(26,25,21,0.6) 100%)"
 *   icon="🍂"
 *   title="Autumn"
 *   titleColor="text-orange-300"
 *   description="The season of harvest and release."
 *   metadata={<Badge.Fire>Fire</Badge.Fire>}
 * >
 *   <GlassPanelHeader.InsetCard label="Body Focus">
 *     Lungs, large intestine, skin
 *   </GlassPanelHeader.InsetCard>
 * </GlassPanelHeader>
 */
function GlassPanelHeader({
  gradient,
  icon,
  title,
  titleColor,
  metadata,
  description,
  children,
  className,
}: GlassPanelHeaderProps) {
  const classes = ['glass-panel p-6', className].filter(Boolean).join(' ')

  return (
    <div className={classes} style={{ background: gradient }}>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-5xl opacity-40" aria-hidden="true">
          {icon}
        </span>
        <div>
          <Type.Heading className={titleColor}>{title}</Type.Heading>
          {metadata && <div className="mt-1">{metadata}</div>}
        </div>
      </div>
      {description && (
        <p className="text-sm text-earth-300 leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  )
}

export interface InsetCardProps {
  /** Uppercase label rendered above the card content via `Type.SectionLabel`. */
  label: string
  children: ReactNode
  className?: string
}

/**
 * A dark inset card used inside `GlassPanelHeader` to display
 * secondary metadata (body areas, active signs, body focus).
 */
function InsetCard({ label, children, className }: InsetCardProps) {
  const classes = ['rounded-xl p-3', className].filter(Boolean).join(' ')
  return (
    <div
      className={classes}
      style={{
        background: 'rgba(26, 25, 21, 0.4)',
        border: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <Type.SectionLabel>{label}</Type.SectionLabel>
      <div className="mt-1">{children}</div>
    </div>
  )
}

export default Object.assign(GlassPanelHeader, { InsetCard })
