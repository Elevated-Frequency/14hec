import type { CSSProperties, ReactNode } from 'react'

/**
 * Orb configuration for the decorative blur elements inside the hero.
 * Each orb is absolutely positioned within the hero container.
 */
export interface HeroOrb {
  /** CSS color value (e.g. 'rgba(93, 168, 126, 0.2)' or a Tailwind bg class is NOT used here — this is a style value). */
  color: string
  /** Tailwind size classes for width and height (e.g. 'w-64 h-64'). */
  size?: string
  /** Tailwind position classes (e.g. '-top-20 -right-20'). */
  position?: string
  /** CSS animation-delay value (e.g. '2s'). Staggers the pulse animation on secondary orbs. */
  animationDelay?: string
}

export interface HeroHeaderProps {
  /**
   * CSS `background` value for the hero container. Overrides the default
   * gradient baked into the `hero-section` class. Each detail page
   * typically computes this from its domain data (plant category,
   * ailment type, body-system category).
   */
  gradient?: string
  /**
   * CSS `border` value. The `hero-section` class provides a default
   * (`1px solid rgba(255,255,255,0.06)`); pass this to override.
   */
  border?: string
  /**
   * Decorative blur orbs. Pass a CSS color string for the standard
   * two-orb layout (large top-right + small bottom-left with staggered
   * animation). Pass an array of `HeroOrb` objects for full control.
   * Pass `'none'` to suppress orbs entirely.
   */
  orbs?: string | HeroOrb[] | 'none'
  /**
   * Header content: title, badges, description, metadata. Rendered
   * inside a `relative z-10` wrapper so it sits above the orbs.
   */
  children: ReactNode
  /** Render the `divider-gradient` line at the bottom. Default `true`. */
  divider?: boolean
  /** Additional classes merged onto the outer `hero-section` container. */
  className?: string
}

const DEFAULT_ORBS: [HeroOrb, HeroOrb] = [
  { color: '', size: 'w-64 h-64', position: '-top-20 -right-20' },
  { color: '', size: 'w-40 h-40', position: '-bottom-10 -left-10', animationDelay: '2s' },
]

function renderOrbs(orbs: string | HeroOrb[]) {
  const resolved: HeroOrb[] =
    typeof orbs === 'string'
      ? DEFAULT_ORBS.map((o) => ({ ...o, color: orbs }))
      : orbs

  return resolved.map((orb, i) => {
    const style: CSSProperties = { background: orb.color }
    if (orb.animationDelay) style.animationDelay = orb.animationDelay
    return (
      <div
        key={i}
        className={`hero-orb ${orb.size ?? 'w-64 h-64'} ${orb.position ?? ''}`}
        style={style}
      />
    )
  })
}

/**
 * Full-bleed gradient header for detail pages. A dark `hero-section`
 * container with category-colored blur orbs, a content slot for title /
 * badges / description, and an optional `divider-gradient` bottom edge.
 *
 * Used by: PlantDetail, AilmentDetail, WellnessDetail, BodySystemsDetail,
 * HMBSView.
 *
 * @example
 * <HeroHeader
 *   gradient="linear-gradient(135deg, rgba(26,90,58,0.12) 0%, rgba(16,15,12,0.85) 50%, rgba(93,168,126,0.04) 100%)"
 *   orbs="rgba(93, 168, 126, 0.2)"
 * >
 *   <Type.Display>Yarrow</Type.Display>
 *   <Type.Caption className="italic">Achillea millefolium</Type.Caption>
 * </HeroHeader>
 */
export default function HeroHeader({
  gradient,
  border,
  orbs = 'none',
  children,
  divider = true,
  className,
}: HeroHeaderProps) {
  const style: CSSProperties = {}
  if (gradient) style.background = gradient
  if (border) style.border = border

  const classes = ['hero-section mb-8', className].filter(Boolean).join(' ')

  return (
    <div className={classes} style={Object.keys(style).length ? style : undefined}>
      {orbs !== 'none' && renderOrbs(orbs)}
      <div className="relative z-10">
        {children}
        {divider && <div className="divider-gradient mt-6" />}
      </div>
    </div>
  )
}
