import type { ReactNode } from 'react'
import Type from '../../atoms/Type'

export interface DashboardHeroProps {
  /** Branded display title. Default `'14 HEC Plant Intelligence'`. */
  title?: string
  /** Subtitle copy below the title. */
  subtitle?: string
  /**
   * Content rendered below the title block — typically a search
   * combobox. Sits inside the relative wrapper so it layers above
   * the decorative orbs.
   */
  children?: ReactNode
  /** Additional classes merged onto the outer container. */
  className?: string
}

/**
 * The app's landing hero. A black rounded card with animated blur orbs,
 * a vertical gradient accent bar (botanical → celestial), a
 * `Type.Branded.Display` title, and a content slot for the global
 * search combobox.
 *
 * One-of-a-kind — used only on the Dashboard. Extracted here so the
 * visual shell is documented alongside the other header patterns.
 *
 * @example
 * <DashboardHero subtitle="Search plants, ailments, and astrology.">
 *   <SearchInput ... />
 * </DashboardHero>
 */
export default function DashboardHero({
  title = '14 HEC Plant Intelligence',
  subtitle,
  children,
  className,
}: DashboardHeroProps) {
  const classes = [
    'relative overflow-visible rounded-3xl p-8 mb-8 bg-black border border-black shadow-hero',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="hero-orb w-96 h-96 -top-48 right-0 bg-botanical-300 blur-[100px] opacity-[0.14]" />
        <div className="hero-orb w-72 h-72 -bottom-36 -left-24 bg-celestial-200 blur-[100px] opacity-[0.12]" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-botanical-300 to-celestial-200" />
          <div>
            <Type.Branded.Display className="text-gradient-botanical">
              {title}
            </Type.Branded.Display>
            {subtitle && (
              <Type.BodySmall as="p" className="mt-1">
                {subtitle}
              </Type.BodySmall>
            )}
          </div>
        </div>
      </div>

      {children && <div className="relative mt-6">{children}</div>}
    </div>
  )
}
